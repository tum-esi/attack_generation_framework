# !/bin/sh
echo "Initializing Firewall"

# Clear all other rules
iptables -F # löscht default rules
iptables -X # löscht aller user rules

# erstmal alles verbieten (state of the art)
iptables -P INPUT DROP
iptables -P OUTPUT DROP
iptables -P FORWARD DROP

# Creation of my own chains
iptables -N MYDROP
iptables -N MYACCEPT

# Loopback communication
#iptables -A INPUT -i lo -j ACCEPT # INPUT alles von loopback springt zu accept
#iptables -A OUTPUT -o lo -j ACCEPT # OUTPUT alles vom loopback springt zu accept

#Configuring our own chains
iptables -A MYDROP -j LOG --log-prefix "FW-DROP: "
iptables -A MYDROP -j DROP
iptables -A MYACCEPT -j LOG --log-prefix "FW-ACCEPT: "
iptables -A MYACCEPT -j ACCEPT
# SSH
iptables -A INPUT -p tcp --dport 22 -j MYACCEPT
# DNS 
iptables -A INPUT -p udp --dport 53 -j MYACCEPT
iptables -A INPUT -p tcp --dport 53 -j MYACCEPT
iptables -A OUTPUT -p udp --dport 53 -j MYACCEPT
iptables -A OUTPUT -p tcp --dport 53 -j MYACCEPT

# Communication with web-controller [my experiment]
#iptables -A INPUT -p tcp --dport 8300 -j MYACCEPT
		# allows control communcation with web-controller
#####iptables -A INPUT -p tcp --dport 8300 -m string ! --string "/catch" --algo kmp -j MYACCEPT

# [my experiment]
# Incoming packed content inspection if match with content blocks out all but also the good ones
#iptables -A INPUT -p tcp --dport 8300 -m string --string "/catch" --algo kmp -j DROP

# accepts good messages not the attack messages
######iptables -A INPUT -p tcp --dport 8300 -m string ! --string "green light request" --algo kmp -j MYDROP

# Does not work because the for densing not the defined port is used
# figgured out by Wireshark package analyses 
#iptables -A INPUT -p tcp --dport 8200 -j DROP

#[my experiment 2]
iptables -A INPUT -p tcp --dport 8300 -j MYACCEPT


# State Inspection
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -m state --state INVALID -j MYDROP 
iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# DHCP
#iptables -A INPUT -p udp --dport 57 -j MYACCEPT
echo "Firewall is configured and active :-)"
iptables -A INPUT -j LOG --log-prefix "FW-LAST-DROP:"

# iptables -L
