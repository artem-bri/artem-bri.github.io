 
       let btnHideShow = document.querySelector('.btn-hide-show');
        let leftPanel = document.querySelector('.left-panel');
        let divContainer = document.querySelector('.container');

        btnHideShow.onclick = function () {
            leftPanel.classList.toggle('hide-panel');
            btnHideShow.classList.toggle('btn-hide-div');
            btnHideShow.classList.toggle('btn-hrest');
            // document.body.classList.toggle('container-thin')
        }