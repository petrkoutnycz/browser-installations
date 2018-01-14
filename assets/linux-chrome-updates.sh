#!/bin/bash

# Store flag whether to enable/disable
enable="$1";

chrome_list="/etc/apt/sources.list.d/google-chrome.list";
chrome_list_save="/etc/apt/sources.list.d/google-chrome.list.save";

if [ "$enable" == "0" ]; then
    # Rename source file to disable updates
    echo "Disabling Chrome updates"

    if [ -e "$chrome_list" ]; then
        echo " > renaming $chrome_list to $chrome_list_save"
        mv "$chrome_list" "$chrome_list_save"
    fi
else
    echo "Enabling Chrome updates"

    if [ -e "$chrome_list_save" ]; then
        echo " > renaming $chrome_list_save to $chrome_list"
        mv "$chrome_list_save" "$chrome_list"
    fi
fi
