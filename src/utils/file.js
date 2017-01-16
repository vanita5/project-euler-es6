/**
 * File utilities
 */

import fs from 'fs';

class FileUtils {

    /**
     * Read file contents.
     *
     * @param filename
     * @return {Promise}
     */
    static readFile(filename) {
        return new Promise((resolve, reject) =>
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        );
    }
}

export default FileUtils;
