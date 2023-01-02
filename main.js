const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image2-icon.png') {
    myImage.setAttribute('src','images/image3.png');
  } else {
    myImage.setAttribute('src','images/image3.png');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = `こんにちは${myName}`;
  }
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `こんにちは${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }  
  function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `こんにちは${myName}`;
    }
  }