async function e(e,t=null){var n=new XMLHttpRequest;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&t(n)},n.open("GET",e,!0),n.send(null)}async function t(e,t,n=null,a=null){var s=new XMLHttpRequest;s.open(t,e,!0),s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE)switch(s.status){case 404:a({error:404});break;case 500:a({error:500});break;case 200:a(JSON.parse(s.response));break;default:a({error:s.status})}},null!=n&&(n=JSON.stringify(n)),s.send(n)}async function n(e,t){return new Promise((function(n,a){var s=new XMLHttpRequest;s.open(e,t),s.onreadystatechange=function(){if(4===s.readyState)switch(s.status){case 200:n(JSON.parse(s.response));default:a(null)}},s.send()}))}export{t as a,n as m,e as x};