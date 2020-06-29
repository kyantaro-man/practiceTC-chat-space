json.user_name @messages.user_name
json.created_at @messages.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.content @message.content
json.image @message.image_url