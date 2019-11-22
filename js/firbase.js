$(document).ready(function(){
    database.collection('review-firbase').get().then( (data) => {
        var result = "";
        data.forEach(element => {
            result +=`
            <div class= "card shadow-lg mt-4">
              <div class = "card-header">
                <img src = "${element.data().profile}" style = "border-radius:50%" height="50" width = "50">
                ${element.data().name}
                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal">
                    View
                </button>

                <!-- The Modal -->
                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    
                        <!-- Modal Header -->
                        <div class="modal-header">
                        
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <!-- Modal body -->
                        <div class="modal-body">
                        <img src = "${element.data().post}" class="img-fluid" >
                        </div>
                        
                        <!-- Modal footer -->
                        <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        
                    </div>
                    </div>
                </div>
              <div class = "card-body">
                <img src = "${element.data().post}" class="img-fluid" >
                ${element.data().text}
              </div>
              <div class="card-footer">

              <button class= "btn btn-danger btn-sm float-right" onclick="deleteUser()" >Delete</div>
              </div>
            </div>
          `;
        });
        $('#result').append(result);
    })
    $('#button').on('click',function(){
        var name = $('#name').val();
        var profile = $('#profile').val();
        var post = $('#post').val();
        var text = $('#text').val();
       database.collection('review-firbase').add({
           name : name,
           profile :profile,
           post : post,
           text : text,
       })
    })
});