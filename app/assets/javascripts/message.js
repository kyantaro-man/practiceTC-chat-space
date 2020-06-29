$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main__message-list__message-top">
          <div class="Chat-main__message-list__message-top__message-sender">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-list__message-top__message-time">
            ${message.created_at}
          </div>
          <div class="Chat-main__message-list__message-bottom">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
        </div>`
      return html;
    } else {
      let html =
        `<div class="Chat-main__message-list__message-top">
          <div class="Chat-main__message-list__message-top__message-sender">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-list__message-top__message-time">
            ${message.created_at}
          </div>
          <div class="Chat-main__message-list__message-bottom">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }


  $('.Form').on('submit', function(e){
    e.preventDefault( );
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: FormData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html =buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('Chat-main__message-form__submit-btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});