let arr = []
var preview = document.querySelector('#group_img');
function previewImages() {
    
    if (this.files) {
      arr.forEach.call(this.files, readAndPreview);
    }

    function readAndPreview(file) {
      var reader = new FileReader();
      arr.push(file) 
      reader.addEventListener("load", function() {
        var image = new Image();
        image.height = 110;
        image.width = 100;
        image.title  = file.name;
        image.src    = this.result;
        image.id = 'img' + arr.length
        let iconClose = document.createElement('i')
        iconClose.classList.add('fa', 'fa-times')
        iconClose.onclick = function() {
          preview.removeChild(document.getElementById(image.id).previousSibling)
          preview.removeChild(document.getElementById(image.id))
        }
        preview.appendChild(iconClose)
        preview.appendChild(image);
        let input = document.createElement('input')
        input.type = 'file'
        console.log(file.src) 
        input.hidden = true
        preview.appendChild(input)
      });
      reader.readAsDataURL(file);
    }
  
  }
  console.log(arr)

document.querySelector('#file').addEventListener("change", previewImages);