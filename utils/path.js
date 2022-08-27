const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
/*
 * 상위 디렉터리로 가능 경로를 구축 하는 도움을 주는 함수
 * dirname 은 경로의 디렉터리 이름을 회신.
 * dirname 을 사용하면 디렉터리 이름을 알아내고자 하는 디렉터리나 파일명만 알면 된다.
 *
 * process 변수는 전역 프로세스 변수 이다. 이 또한 모든 파일에 사용 가능한 변수이다.
 * mainModule 은 애플리케이션을 시작한 주요 모듈을 나타낸다.
 * filename 은 이 모듈이 어떤 파일에서 시작되었는지 알아 낼 수 있다.
 *
 *  즉 process.mainModule.filename 은 우리 애플리케이션이 실행될 수 있도록 해주는 파일의 경로를 알려준다.
 * process.mainModule.filename 이 파일명을 dirname 에 입력하여 그 디렉터리의 경로를 알아낼 수 있다.
 *
 * */
