<?php 

require_once("../core/domain/Util.php");

?>

<form id="info-email-form" class="pure-form apply-form" action="<?php echo Util::getHttpApplyPath(); ?>/mod-info-processor.php" method="POST" style="visibility:visible;opacity:1;transition: opacity 1s;">
	<div class="mod-apply-frameSingle" style="font-size:130%;">	
		<p style="margin:10px 10px 10px 30px;font-size:110%;"><b>For annual dues as low as $120</b><p><p style="margin-left:30px;">unlimited Nexus Web Meet minutes, plus expert training and community</p>
		<p style="margin:20px;" ><a class="pure-button button-link" href="javascript:void(0)" onclick="switchToApplyForm();" >Check Eligibility</a></p>
		<p style="margin:20px;" ><a class="pure-button button-link" href="javascript:void(0)" onclick="showInfoEmailField();">Information Packet</a></p>
		<p style="margin:20px;" ><a class="pure-button button-link" href="javascript:void(0)" onclick="showInfoWebinarField();">Streaming Webinar</a></p>
		<div class="youtube-container" id="partner_perspective_embed" style="width:420px;height:240px;left:280px;top:90px;position:absolute;">
   		<div class="youtube-player" id="tk-QNJruZgM"></div>
		</div>
		
		<div id="fade" class="black_overlay" style="display:none;"></div>

		<div id="info-email" class="white_content" style="top:80px;left:260px;width:420px;min-height:40px;display:none;border-radius:8px;">
			<p><a onclick="hideInfoEmailField();" style="float:right;"><span class="fa fa-times-circle-o fa-2x" style="margin-right:4px;flat:right;color:#899d70;cursor:pointer;" ></span></a></p>&nbsp;<br/>
			<p>We will send a packet of information to your email address. Your address will be used respectfully. We will not spam you.</p>
			<span id="info-email-input"><input type="email" name="email_1" placeholder="Recipient Email" maxlength="100" style="width:320px;margin-top:10px;" required ></span>
			<a id="info-email-button" class="pure-button button-link" onclick="infoEmailValidateAndSubmit();" style="width:46px;border-radius:4px;float:right;"><span class="fa fa-play" style="margin-right:4px;" ></span>Send</a>
		</div>
		
		<div id="info-webinar" class="white_content" style="top:80px;left:260px;width:420px;min-height:40px;display:none;border-radius:8px;">
			<p><a onclick="hideInfoWebinarField();" style="float:right;"><span class="fa fa-times-circle-o fa-2x" style="margin-right:4px;flat:right;color:#899d70;cursor:pointer;" ></span></a></p>&nbsp;<br/>
			<p style="margin-top:10px;">This link will take you to an event page where you can register for a brief, no-obligation, informational webinar.</p>
			<a id="" class="pure-button button-link" onclick="hideInfoWebinarField()" href="https://www.eventbrite.com/e/information-webinar-tickets-16317817030" target="_blank" style="width:70px;border-radius:4px;float:right;"><span class="fa fa-external-link" style="margin-right:6px;" ></span>Register</a>
		</div>

	</div>	
</form>	
