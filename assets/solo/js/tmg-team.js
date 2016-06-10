/*(function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
             $('#my-button').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup();

            });

        });

    })(jQuery);*/
	
	
	function fn_LoadWriteup( pEmpName )
	{
		
		switch(pEmpName){
	case "sean_eilers":
		dvEmpPhoto.src='assets/solo/images/executives/profile-sean-eilers.jpg';
		dvEmpName.innerHTML="Sean Eilers";
		dvEmpTitle.innerHTML="Founder &amp; CEO";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Sean founded Tiburon Media Group in 2003 and leads the organization. Along with day to day operations, he continues to guide the company's technology innovation and development. Prior to founding Tiburon Media, Sean was Vice President, US Media Sales for Terra Lycos. At Lycos, he was responsible for the media sales, direct marketing and subscription sales teams, which monetized properties like Lycos, Wired, Gamesville, Quote, Raging Bull, Tripod, Angelfire and Sonique. He was also instrumental in the acquisition of Get Relevant, one of the original co-registration platform technologies. Sean joined Lycos in 1999, through their acquisition of Gamesville, where he held the position of Director of Sales. Prior to joining Gamesville, he held sales management positions with Cox Interactive Sales and Listing Link, having begun his online advertising career in 1995. Sean has served in numerous corporate advisory positions and as a board member of the Bay Area Interactive Group. Sean earned a Bachelor's Degree in Economics from the University of California, Davis. </p>";
		break;
	
	case "tom_callagy":
		dvEmpPhoto.src='assets/solo/images/executives/profile-tom-callagy.jpg';
		dvEmpName.innerHTML="Tom Callagy";
		dvEmpTitle.innerHTML="Director of Sales";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Tom joined Tiburon Media Group in June of 2006, as a Director of Sales.While Tom works with a multitude of clients in almost every vertical, he helped develop CRM systems for both the education and automotive verticals, allowing clients to manage their lead gen efforts more efficiently and profitably. Prior to joining Tiburon Media, Tom was a National Accounts Manager for Lycos, where he developed and maintained client relationships. Tom has also held Sales Management positions with the Cintas Corporation FAS Division, in medical sales. Tom brings to Tiburon Media a strong customer management background and experience in the interactive marketing business. </p>";
		break;	
	
	case "gabe_bletnitsky":
		dvEmpPhoto.src='assets/solo/images/executives/profile-gabe-bletnitsky.jpg';
		dvEmpName.innerHTML="Gabe Bletnitsky";
		dvEmpTitle.innerHTML="Vice President of Sales";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Gabe joined Tiburon Media in February, 2005 as Director of Sales. Gabe works with some of the largest lead buyers in the country and specifically focuses on Fortune 500 companies. Prior to Tiburon Media, Gabe was Direct Marketing Manager for MarketTools, a leading online market research company. There he spearheaded media buying, technology requirements, email deliverability and scaled the MarketTools online panel to 2 Million plus households. Prior to joining MarketTools, he held agency and direct marketing positions at Ignite Studio, & Providian Financial. Gabe brings to Tiburon Media a strong client services background and years of experience and expertise in the interactive marketing world. Gabe earned a Bachelor's Degree in Marketing from the University of San Francisco. </p>";
		break;	
	
	case "chris_parry":
		dvEmpPhoto.src='assets/solo/images/executives/profile-chris-parry.jpg';
		dvEmpName.innerHTML="Chris Parry";
		dvEmpTitle.innerHTML="Vice President of Business Development";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Chris joined Tiburon Media in December, 2003 as Vice President, Business Development. His experience and expertise in the online direct marketing arena allowed Tiburon Media to expand its client base of brand marketers and roll out cutting edge database management technologies for publishers. Prior to joining Tiburon Media, Chris was a Sales Director for Jumpstart Technologies, which launched Tagged, one of the worlds largest social networks. Prior to Jumpstart, Chris was the Director of Database Marketing and Subscription Sales for Terra Lycos. Chris was an integral part of creating a universal registration system for all Lycos properties and integrating the Get Relevant sales team and network of publishers. Prior to joining Lycos, Chris held management and sales positions with Gamesville and About.com. Chris earned a Bachelor's Degree in Organizational Studies from the University of California, Davis. </p>";
		break;
	
	case "thomas_judd":
		dvEmpPhoto.src='assets/solo/images/executives/profile-thomas-judd.jpg';
		dvEmpName.innerHTML="Thomas Judd";
		dvEmpTitle.innerHTML="Vice President of Digital Marketing Services";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Thomas Judd joined Tiburon Media from Shorehaven Media, an interactive marketing consultancy he founded.  Mr. Judd brings over 20 years of sales, marketing and business development experience to Tiburon Media.  Prior to founding Shorehaven Media, he held Senior Executive Management roles at MyLife.com, eForce Media and Fox Interactive Media where he led and oversaw lead generation, display advertising and site monetization for the companies online properties.Before relocating back to California, Thomas previously held sales management positions at Prospectiv and Terra Lycos in New York City.  Prior to Terra Lycos, he led business development efforts Gartner Group and Deja.com. Thomas began his interactive career in San Francisco at Sybervision, Inc., where he was responsible for all online sales and marketing for the direct marketer.</p> <p class='bio-intro'>Thomas holds a Bachelor's degree in Psychology and Sociology from the University of Colorado, Boulder and a Master's in Integrated Marketing from New York University.</p>";
		break;	
	
	case "tara_boyer":
		dvEmpPhoto.src='assets/solo/images/executives/profile-tara-boyer.jpg';
		dvEmpName.innerHTML="Tara Boyer";
		dvEmpTitle.innerHTML="Campaign Manager";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Tara joined Tiburon Media in August 2011, interfacing directly with the TMG Sales Team and Publishers to maximize revenue within the TMG Lead Generation Network. Prior to joining Tiburon Media, Tara was a leading Sales Manager for Restoration Hardware, opening numerous new store locations with corporate directors and leading product training for new store teams.</p> <p class='bio-intro'>Tara earned a Bachelor's Degree in Business Management from University of Phoenix.</p>";
		break;	
	
	case "danielle_carire":
		dvEmpPhoto.src='assets/solo/images/executives/profile-danielle-carire.jpg';
		dvEmpName.innerHTML="Danielle Carire";
		dvEmpTitle.innerHTML="Director of Finance";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Danielle joined Tiburon Media in December, 2003 as the Director of Finance. She is responsible for financial reporting, billing, credit and collections. Prior to joining Tiburon Media, Danielle was a Sales Development Specialist for Terra Lycos where she liaised with the sales department and finance department, reporting to the VP of Sales. Danielle joined Lycos in 1999 when they acquired Gamesville. Prior to Lycos she was a Manager of Traffic and Distribution for Rysher Entertainment. Danielle earned a Bachelor’s Degree in Communications from Brooklyn College. </p>";
		break;	
	
	case "rahul_richhi":
		dvEmpPhoto.src='assets/solo/images/executives/profile-rahul-richhi.jpg';
		dvEmpName.innerHTML="Rahul Richhi";
		dvEmpTitle.innerHTML="Head of Information Technology";
		dvEmpWriteup.innerHTML="<p class='bio-intro'>Rahul joined the TMG team in 2006 managing a team of eleven developers, engineers and database administrators. His research duties include sourcing best of breed technologies in developing a state of the art application/database platform for TMG.  In parallel, Rahul facilitated migration of all processing capacity to a cloud based network to enhance scalability. Along with handling day to day technical requests he is responsible for research &amp; development of the new technologies to enhance TMG's proprietary platform. Rahul consults closely with TMG clients to understand  their business needs and improve work flow.</p> <p class='bio-intro'>Rahul earned a B.A. from Delhi University, Masters in Computer Applications from Department of IT Ministry, New Delhi and a MBA from SCDL, Pune, India. He is Cisco Certified (CCNA) and PMP Trained.</p>";
		break;	
	/*
	case "":
		dvEmpPhoto.src='assets/solo/images/executives/';
		dvEmpName.innerHTML="";
		dvEmpTitle.innerHTML="";
		dvEmpWriteup.innerHTML="";
		break;	
		*/
	
	default:
		break;
}
		$('#element_to_pop_up').bPopup(
			{
				transition: 'slideDown',
				speed: 450, //can be a string ('slow'/'fast') or int
				positionStyle: 'fixed'
			}
		);
	};