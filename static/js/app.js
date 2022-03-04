function ekUpload(){
    function Init() {
  
      console.log("Upload Initialised");
  
      let fileSelect = document.getElementById('img'),
          fileDrag = document.getElementById('file-drag')
            
      fileSelect.addEventListener('change', fileSelectHandler, false);
    
      let xhr = new XMLHttpRequest();
      if (xhr.upload) {
        
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }
  
    function fileDragHover(e) {
      let fileDrag = document.getElementById('file-drag');
  
      e.stopPropagation();
      e.preventDefault();
  
      fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }
  
    function fileSelectHandler(e) {
      
      let files = e.target.files || e.dataTransfer.files;
      document.getElementById('copyLink').classList.add("hidden")
      
      fileDragHover(e);
  
      for (let i = 0, f; f = files[i]; i++) {
        parseFile(f);
      }
    }
  
    // Output
    function output(msg) {
      // Response
      let m = document.getElementById('messages');
      m.innerHTML = msg;
    }
  
    function parseFile(file) {
  
      
      let len = encodeURI(file.name).length
      
      output(
        `<li class="row">
            <div class="content upload">
              <i class="fa fa-file-text" id="fa-file-text"></i>
              <div class="details">
                <span class="name">${
                  encodeURI(file.name).substring(0,7)+"_...."+encodeURI(file.name).slice(len-3)} <span style="color:#454cad" bold> • Uploaded </span></span>
              </div>
            </div>
            <div class="icon icon--order-success svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="74px" height="74px">
                <g fill="none" stroke="#6990F2" stroke-width="4">
                  <circle cx="37" cy="36" r="25" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
                  <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                </g>
              </svg>
            </div>
          </li>
        `
      );
      
      let imageName = file.name;
  
      let isGood = true;
      let isfileName =  (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
      
      if (isGood) {

        document.getElementById('start').classList.add("hidden");
        document.getElementById('response').classList.remove("hidden");
        document.getElementById('file-image').classList.remove("hidden");
        
        setInterval(function() {
          document.getElementById('generateLink').classList.remove('hidden')
        }, 2500);
        if (isfileName) {
          document.getElementById('file-image').src = URL.createObjectURL(file);
        }else{
          document.getElementById('file-image').classList.add("hidden");
          document.getElementById('fa-file-text').classList.remove("hidden")
        }  
      }
      else {
        document.getElementById('file-image').classList.add("hidden");
        document.getElementById('start').classList.remove("hidden");
        document.getElementById('response').classList.add("hidden");
        document.getElementById("file-upload-form").reset();
      }
    }
   
    if (window.File && window.FileList && window.FileReader) {
      Init();
    } else {
      document.getElementById('file-drag').style.display = 'none';
    }   
  }
  ekUpload();

//   let generateLinkBtn = document.getElementById('generateLinkBtn')

//   generateLinkBtn.addEventListener('click', ()=>{
//     generateLinkBtn.innerText = "Link Generated ! Copy Share & Enjoy"
//     document.getElementById('copyLink').classList.remove("hidden")
//   })

  let copyLnkBtn = document.getElementById('link-copy-btn');

  copyLnkBtn.addEventListener('click', ()=>{
    let copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyLnkBtn.innerText = "Copied!"
  })

  let copyText = document.getElementById("myInput");

  if(copyText.value == 0){
    document.getElementById('copyLink').classList.add("hidden")


  }else{
    document.getElementById('copyLink').classList.remove("hidden")
    // copyText.value = window.location + copyText.value
    
  }