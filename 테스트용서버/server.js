const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors()); // CORS middleware를 사용하여 모든 도메인에서의 요청을 허용

app.get('/data', (req, res) => {
    const dataPath = path.join(__dirname, 'data.json'); // 'data.json' 파일의 절대경로를 구합니다.

    fs.readFile(dataPath, (err, data) => { // 'data.json' 파일을 읽습니다.
        if (err) {
            console.error(err);
            res.status(500).send('Server Error'); // 파일 읽기 실패 시 500 에러를 반환합니다.
            return;
        }

        const jsonData = JSON.parse(data); // 읽어온 파일을 JSON으로 파싱합니다.
        res.json(jsonData); // 파싱한 데이터를 JSON 형식으로 반환합니다.
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
