const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const params = {
  query: '해리포터',
  size: '2'
}

const queryString = new URLSearchParams(params).toString();

(async () => {
  const response = await fetch(API_URL + queryString, {
    headers: {Authorization: 'KakaoAK f35ec42549ec2a70cce1772c96c923fb'}
  });

  const data = await response.json();
  const {
    documents: [{title}]
  } = data;

  console.log(title)
})();

