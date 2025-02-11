<?php

// Forked from https://gist.github.com/1809044
// Available from https://gist.github.com/nichtich/5290675#file-deploy-php

$TITLE   = 'Git auto deploy';

echo <<<EOT
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>$TITLE</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<pre>
$TITLE




EOT;

// Check whether client is allowed to trigger an update

// $allowed_ips = array(
//	"192.30.252.0/22", "185.199.108.0/22", "140.82.112.0/20", '50.57.231.', '204.232.175.', '192.30.252.', // GitHub
// );
$allowed = true;

$headers = apache_request_headers();

if (@$headers["X-Forwarded-For"]) {
    $ips = explode(",",$headers["X-Forwarded-For"]);
    $ip  = $ips[0];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

if (!$allowed) {
	header('HTTP/1.1 403 Forbidden');
 	echo "<span style=\"color: #ff0000\">Not allowed</span>\n";
    echo "</pre>\n</body>\n</html>";
    exit;
}

flush();

// Actually run the update

$commands = array(
	'whoami',
	'git pull',
	'git status',
	'git submodule sync',
	'git submodule update',
	'git submodule status',
);

$output = "\n";

$log = "####### ".date('Y-m-d H:i:s'). " #######\n";

foreach($commands AS $command){
    // Run it
    $tmp = shell_exec("$command 2>&1");
    // Output
    $output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
    $output .= htmlentities(trim($tmp)) . "\n";

    $log  .= "\$ $command\n".trim($tmp)."\n";
}

$log .= "\n";

file_put_contents ('deploy-log.txt',$log,FILE_APPEND);

echo $output; 

?>
</pre>
</body>
</html>
