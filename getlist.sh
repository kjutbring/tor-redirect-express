curl -s https://check.torproject.org/exit-addresses | grep ExitAddress  | sed 's/ExitAddress //g' | awk '{print }' > list.txt
