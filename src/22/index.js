/**
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names,
 * begin by sorting it into alphabetical order.
 * Then working out the alphabetical value for each name,
 * multiply this value by its alphabetical position in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order,
 * COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53,
 * is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

import fs from 'fs';
import path from 'path';

const FILENAME = path.join(__dirname, 'p022_names.txt');

const readFile = () =>
    new Promise((resolve, reject) =>
        fs.readFile(FILENAME, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    );

const parseFile = data =>
    new Promise(resolve =>
        resolve(data.replace(/"/g, '').split(','))
    );

const nameScore = (name, th) => {
    return th * name.split('').reduce((a, b) => a + b.charCodeAt(0) - 64, 0);
};

const scores = () =>
    readFile()
        .then(parseFile)
        .then(data => {
            console.log(
                data
                    .sort((a, b) => a < b ? -1 : 1)
                    .map((name, i) => nameScore(name, i + 1))
                    .reduce((a, b) => a + b)
            );
        });

scores();
