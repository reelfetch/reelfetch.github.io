

function showSuccessMessage(thumbnail,title,lowQ,highQ) {
    document.getElementById('vidthumbnail').src = thumbnail;
    document.getElementById('vidthumbnail').alt = title+' video';
    document.getElementById('vidLowQ').href = lowQ;
    document.getElementById('vidHighQ').href = highQ;
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
}


function showErrorMessage() {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
}

//downloader
async function downloadReel() {
    const url = document.getElementById('url').value;
    if (url) {
       // alert("This is where the download process would start using an API or test backend service.");
        const furl = 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url='+url;
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a003578484mshd4325475f01bf8dp1d9fa7jsn7484c96c3384',
            'x-rapidapi-host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(furl, options);
            const JSONresult = await response.text();
            const sResult = JSON.parse(JSONresult);
            const vidThumb = sResult.thumbnail;
            const vidTitle = sResult.title;
            const vidLowQ = sResult.links['Download Low Quality'];
            const vidHighQ = sResult.links['Download High Quality']
            showSuccessMessage(vidThumb,vidTitle,vidLowQ,vidHighQ);
        } catch (error) {
            document.getElementById('error-message').innerHTML = '<strong>Error : </strong>'+error;
            showErrorMessage();
        }
    } else {
        document.getElementById('error-message').innerHTML = '<strong>Error : </strong>'+'Input url!';
        showErrorMessage();
    }
}




