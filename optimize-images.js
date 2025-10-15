// optimize-images.js
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

// --- CONFIGURACIÓN ---
const IMAGE_DIR = './public/images';
const WEBP_DIR = './public/images';
const JPG_WEBP_QUALITY = 80; // Calidad para imágenes fotográficas (JPG)

async function generateWebp() {
    console.log('Iniciando la generación automática de imágenes WebP (JPG y PNG)...');

    try {
        const files = await readdir(IMAGE_DIR);

        // 1. Filtrar archivos que son candidatos para WebP (JPG, JPEG, PNG)
        const filesToProcess = files.filter(file => 
            file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
        );
        
        if (filesToProcess.length === 0) {
            console.log('No se encontraron archivos JPG, JPEG o PNG para procesar.');
            return;
        }

        console.log(`Archivos encontrados para optimización: ${filesToProcess.length}`);

        // 2. Procesar cada archivo
        for (const file of filesToProcess) {
            const filePath = path.join(IMAGE_DIR, file);
            // El nombre de salida siempre será .webp
            const webpFileName = file.replace(/\.(jpe?g|png)$/i, '.webp');
            const webpPath = path.join(WEBP_DIR, webpFileName);

            let sharpInstance = sharp(filePath);
            
            // Lógica de conversión basada en la extensión original
            if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
                // JPG (Fotos): Usar compresión con pérdida para máximo ahorro
                sharpInstance = sharpInstance.webp({ quality: JPG_WEBP_QUALITY });
                console.log(`[JPG] Procesando ${file}...`);
            } else if (file.endsWith('.png')) {
                // PNG (Gráficos/Logos): Usar compresión sin pérdida para mantener la nitidez
                // 'lossless: true' asegura calidad, 'nearLossless' puede ser otra opción.
                sharpInstance = sharpInstance.webp({ lossless: true }); 
                console.log(`[PNG] Procesando ${file} con modo sin pérdida...`);
            } else {
                continue; // Saltar si hay un error de filtro
            }

            await sharpInstance.toFile(webpPath);
            
            console.log(`✅ Creado: ${webpFileName}`);
        }
        
        console.log('🎉 Proceso de WebP finalizado con éxito.');

    } catch (error) {
        console.error(`❌ Error en la generación de WebP: ${error.message}`);
        if (error.code === 'ENOENT') {
            console.error(`Asegúrate de que el directorio ${IMAGE_DIR} exista.`);
        }
    }
}

generateWebp();