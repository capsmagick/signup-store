#!/bin/bash

# Array of folder names
folders=("LookBook" "BestSellers" "MobileHome")

# Loop through each folder name and create the folder and file
for dir in "${folders[@]}"; do
 # mkdir -p src/routes/app/$dir
 # touch src/routes/app/$dir/+page.svelte
 #touch src/routes/app/$dir/+page.svelte 
 touch src/lib/components/app/home/$dir.svelte
done

