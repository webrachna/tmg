<%

	'"SendEmail.aspx?fName=" + txtname.value + "&email=" + txtemail.value + "&phone=" + txtphone.value + "&website=" + txtwebsite.value + "&message=" + txtmessage.value + ""
	'"TMGSendMailer.asp?fn=" + txtname.value + "&em=" + txtemail.value + "&ph=" + txtphone.value + "&wb=" + txtwebsite.value + "&msg=" + txtmessage.value + "&em2=" + ""

On Error Resume Next

	'Requests Variables
	Dim strFullName, strEmailAddress, strPhoneNumber, strWebsite, strMessage, strLandingPageMailTo
	Dim strMailBody
	strFullName = Request("fn")
	strEmailAddress = Request("em")
	strPhoneNumber = Request("ph")
	strWebsite = Request("wb")
	strMessage = Request("msg")


	strMailBody = "<html><body><table><tr><td>"
	strMailBody = strMailBody & "Full Name:     " & strFullName & "<br><br>"
	strMailBody = strMailBody & "Email Address:     " & strEmailAddress &"<br><br>"
	strMailBody = strMailBody & "Phone Number:      " & strPhoneNumber & "<br><br>"
	strMailBody = strMailBody & "Website:       " & strWebsite & "<br><br>"
	strMailBody = strMailBody & "Message:       " & strMessage & "<br><br>"
	strMailBody = strMailBody & "</td></tr></table></body></html>"

	'//response.write(strMailBody)

	Set objMail = CreateObject("CDO.Message")
	With objMail
		.Subject = "Thanks for visit, we will contact you soon!"
		.From = "info@tiburonmedia.com"
		.To =  "chris@tiburonmedia.com"
		.Bcc = "rahul@tiburonmedia.com"
		.HTMLBody = strMailBody

		.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
		.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "mail.estream.com" 'Name or IP of remote SMTP server
		.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 25 'Server port
		.Configuration.Fields.Update

		.Send()
	End With

	Set objMail = Nothing

	If Err.Number <> 0 then
		Response.Write("Unfortunately the mail was not sent, please try again.")
	else
		Response.Write("Thank you! we have received your mail, and we shall contact you soon.")
	End if
%>