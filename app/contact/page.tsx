"use client";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin
} from "lucide-react";

import { useState } from "react";


export default function ContactPage() {


  const [loading,setLoading] = useState(false);



  const handleSubmit = (
    e:React.FormEvent<HTMLFormElement>
  )=>{

    e.preventDefault();


    setLoading(true);



    const formData = new FormData(e.currentTarget);



    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");



    const whatsappText = `

🚀 New Website Inquiry

👤 Name:
${name}

📧 Email:
${email}

📱 Phone:
${phone}

💬 Message:
${message}

`;



    const whatsappNumber = "918084872966";



    const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappText
    )}`;



    window.open(
      whatsappURL,
      "_blank"
    );


    setLoading(false);

  };





  return (


<main className="min-h-screen bg-gray-50 py-20">


<div className="mx-auto max-w-7xl px-6">





{/* Heading */}


<div className="
mx-auto
mb-12
max-w-3xl
text-center
">


<h1 className="
text-4xl
font-bold
text-black
md:text-6xl
">

Let's work together

</h1>



<p className="
mt-5
text-gray-600
">

Have a project idea?
Send us your requirements on WhatsApp.

</p>


</div>








<div className="
grid
overflow-hidden
rounded-3xl
bg-white
shadow-xl
md:grid-cols-2
">







{/* LEFT SIDE */}



<div className="
bg-[#0a2840]
p-10
text-white
">


<h2 className="
text-3xl
font-bold
">

Get In Touch

</h2>



<p className="
mt-4
text-blue-100
">

Let's discuss your next digital project.

</p>






<div className="
mt-10
space-y-6
">





<div className="
flex
items-center
gap-4
">


<div className="
rounded-full
bg-white/20
p-3
">

<Mail/>

</div>


<div>

<p className="
text-sm
text-blue-200
">

Email

</p>


<p>
work.zikrullah@gmail.com
</p>


</div>


</div>







<div className="
flex
items-center
gap-4
">


<div className="
rounded-full
bg-white/20
p-3
">

<Phone/>

</div>


<div>

<p className="
text-sm
text-blue-200
">

Phone

</p>


<p>
+91 8084872966
</p>


</div>


</div>







<div className="
flex
items-center
gap-4
">


<div className="
rounded-full
bg-white/20
p-3
">

<MapPin/>

</div>


<div>

<p className="
text-sm
text-blue-200
">

Location

</p>


<p>
Hyderabad, India
</p>


</div>


</div>




</div>


</div>









{/* FORM */}



<div className="p-10">



<form
onSubmit={handleSubmit}
className="space-y-5"
>






{/* NAME */}

<div>

<label className="
mb-2
block
text-sm
font-medium
text-gray-700
">

Full Name

</label>



<div className="relative">


<User
className="
absolute
left-3
top-3
text-gray-400
"
size={20}
/>


<input

required

name="name"

type="text"

placeholder="John Doe"

className="
w-full
rounded-xl
border
py-3
pl-11
pr-4
text-black
outline-none
focus:border-blue-600
focus:ring-2
focus:ring-blue-100
"

/>


</div>

</div>









{/* EMAIL */}


<div>


<label className="
mb-2
block
text-sm
font-medium
text-gray-700
">

Email

</label>



<div className="relative">


<Mail

className="
absolute
left-3
top-3
text-gray-400
"

size={20}

/>



<input

required

name="email"

type="email"

placeholder="example@gmail.com"

className="
w-full
rounded-xl
border
py-3
pl-11
pr-4
text-black
outline-none
focus:border-blue-600
focus:ring-2
focus:ring-blue-100
"

/>



</div>



</div>









{/* PHONE */}



<div>


<label className="
mb-2
block
text-sm
font-medium
text-gray-700
">

Phone Number

</label>



<div className="relative">


<Phone

className="
absolute
left-3
top-3
text-gray-400
"

size={20}

/>


<input

required

name="phone"

type="tel"

placeholder="+91 98765 43210"

className="
w-full
rounded-xl
border
py-3
pl-11
pr-4
text-black
outline-none
focus:border-blue-600
focus:ring-2
focus:ring-blue-100
"

/>


</div>


</div>









{/* MESSAGE */}



<div>


<label className="
mb-2
block
text-sm
font-medium
text-gray-700
">

Project Details

</label>



<textarea

required

name="message"

rows={5}

placeholder="Tell us about your project..."

className="
w-full
rounded-xl
border
p-4
text-black
outline-none
focus:border-blue-600
focus:ring-2
focus:ring-blue-100
"

/>



</div>









{/* BUTTON */}



<button

disabled={loading}

type="submit"

className="
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-[#0a2840]
py-3
font-semibold
text-white
transition
hover:bg-blue-1000
disabled:opacity-50
cursor-pointer
"

>


{
loading
?
"Opening WhatsApp..."
:
"Send WhatsApp Message"
}


<Send size={18}/>


</button>






</form>



</div>






</div>




</div>


</main>


  );

}