#!/bin/sh


echo -e "begin CI/CD:\n"

echo -e "\033[33mstep1: \033[0m"

echo -e "\033[33mESLint begin:\033[0m"

npm run lint

lint_result=$?

echo -e "\033[33mESLint end.\033[0m\n\n"


echo -e "\033[33mstep2: \033[0m"

echo -e "\033[33mUnit Test begin:\033[0m"

npm run unit_test

unit_test_result=$?

echo -e "\n\033[33mUnit Test end.\033[0m\n\n"

echo -e "\033[33mstep3: \033[0m"

echo -e "\033[33mFunction Test begin:\033[0m"

npm run func_test

func_test_result=$?

echo -e "\n\033[33mFunction Test end.\033[0m\n\n"

echo -e "\033[33mstep4: \033[0m"

if (($lint_result == 0 && $unit_test_result == 0 && $func_test_result == 0)); then

    echo -e "\033[33mUpload begin:\033[0m"

    echo "Uploading..."

    node ciscript > /dev/null

    upload_result=$?

    echo -e "\033[33mUpload end.\033[0m\n\n"

    upload_action_result=1

else

    echo -e "\033[33mUpload canceled.\033[0m\n\n"

    upload_action_result=0
    
fi

echo -e "CI result:"

if (($lint_result == 0)); then
    echo -e "ESLint: \033[32m passed \033[0m"
else
    echo -e "ESLint: \033[31m failed \033[0m"
fi

if (($unit_test_result == 0)); then
    echo -e "Unit Test: \033[32m passed \033[0m"
else
    echo -e "Unit Test: \033[31m failed \033[0m"
fi

if (($func_test_result == 0)); then
    echo -e "Function Test: \033[32m passed \033[0m"
else
    echo -e "Function Test: \033[31m failed \033[0m"
fi

if (($upload_action_result == 1)); then
    if (($upload_result == 0)); then
        echo -e "Upload: \033[32m passed \033[0m"
    else
        echo -e "Upload: \033[31m failed \033[0m"
    fi
else
    echo -e "Upload: \033[31m failed \033[0m"
fi