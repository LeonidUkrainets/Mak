<?php
header("Content-type: text/plain; charset=windows-1251");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Expires: -1"); 

echo "Hello world!\n\n";

if (isset($a))
{
  for ($i=1; $i < 10000; $i++)
  {
    echo 'Це тестовий рядок. ';
    if (($i % 1000) == 0) flush();
  }
}

if (count($_GET) > 0)
{
  echo "\n\nПередано GET'ом\n"; print_r($_GET);
}
?>
