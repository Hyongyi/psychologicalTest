
function setResult_ys(){
    let point = pointNumber;

    const finishName = document.querySelector('.finishname');
    finishName.innerHTML = infoList[point].name; //infoList의 n번째 name값을 가져와 innerHTML

    var finishImg = document.createElement('img');
    const imgDiv = document.querySelector('#finishImg');
    var imgURL = '/img/image-ys' + point + '.png';

    finishImg.src = imgURL;
    finishImg.alt = point;
    finishImg.classList.add('img-fluid');
    imgDiv.appendChild(finishImg);

    const finishDesc = document.querySelector('.finishDesc');

    finishDesc.innerHTML = infoList[point].desc;
}

function gointro(){
    return location.replace('/ys/ystest/');
}