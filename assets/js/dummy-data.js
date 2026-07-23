window.DATA = {
  user: { name: "Arijit", full: "Arijit Sharma", email: "arijit@socialconnect.app", plan: "Pro" },
  overview: [
    { icon: "calendar4", cls: "y", num: 12, lbl: "Scheduled" },
    { icon: "send", cls: "g", num: 8, lbl: "Published" },
    { icon: "exclamation-circle", cls: "r", num: 2, lbl: "Failed" },
    { icon: "pencil-square", cls: "b", num: 4, lbl: "Drafts" },
  ],
  accounts: [
    { id:"fb", name:"Facebook Page", handle:"SocialConnect Official", count:"2 Pages Connected", icon:"facebook", bg:"bg-fb" },
    { id:"ig", name:"Instagram Business", handle:"@socialconnect.app", count:"3 Accounts Connected", icon:"instagram", bg:"bg-ig" },
    { id:"li", name:"LinkedIn Page", handle:"SocialConnect", count:"1 Page Connected", icon:"linkedin", bg:"bg-li" },
    { id:"x",  name:"X (Twitter)", handle:"@socialconnect_io", count:"1 Account Connected", icon:"twitter-x", bg:"bg-x" },
    { id:"gb", name:"Google Business Profile", handle:"SocialConnect", count:"1 Location Connected", icon:"google", bg:"bg-gb" },
    { id:"wp", name:"WordPress", handle:"socialconnect.blog", count:"1 Site Connected", icon:"wordpress", bg:"bg-wp" },
    { id:"bl", name:"Blogger", handle:"socialconnect.blogspot", count:"1 Blog Connected", icon:"pencil-square", bg:"bg-bl" },
  ],
  today: [
    { time:"10:00 AM", title:"Instagram Post", desc:"Behind the scenes of our new project…", icon:"instagram", bg:"bg-ig", status:"Scheduled" },
    { time:"12:30 PM", title:"Facebook Post", desc:"We are excited to announce our…", icon:"facebook", bg:"bg-fb", status:"Scheduled" },
    { time:"03:45 PM", title:"LinkedIn Post", desc:"5 productivity tips for better work…", icon:"linkedin", bg:"bg-li", status:"Scheduled" },
  ],
  activity: [
    { title:"Instagram Post Published", quote:"“New product launch! 🚀”", time:"2h ago", badge:"success", label:"Published", icon:"instagram", bg:"bg-ig"},
    { title:"Facebook Post Scheduled", quote:"“Join us for a special webinar.”", time:"4h ago", badge:"warning", label:"Scheduled", icon:"facebook", bg:"bg-fb"},
    { title:"Tweet Failed", quote:"“Check out our latest blog post.”", time:"6h ago", badge:"danger", label:"Failed", icon:"twitter-x", bg:"bg-x"},
  ],
  scheduled: [
    { time:"10:30 AM", date:"22 Jul 2026", title:"Excited to share our new product update with you all! 🚀", cat:"Product Updates", side:"y", icon:"megaphone", plats:["bg-fb","bg-ig","bg-li"], extra:2 },
    { time:"01:15 PM", date:"22 Jul 2026", title:"Start your day with a plan and a positive mindset. ✨", cat:"Motivation", side:"b", icon:"cup-hot", plats:["bg-fb","bg-ig"] },
    { time:"04:45 PM", date:"22 Jul 2026", title:"Did you know? Small steps every day lead to big results.", cat:"Tips & Facts", side:"g", icon:"lightbulb", plats:["bg-li","bg-x"] },
    { time:"07:30 PM", date:"22 Jul 2026", title:"Grateful for the little things and big opportunities. 🙌", cat:"Inspiration", side:"p", icon:"heart", plats:["bg-ig","bg-gb"] },
  ],
  analytics: {
    stats: [
      { lbl:"Total Reach", num:"128.4K", chg:"+12.4%", up:true },
      { lbl:"Engagement", num:"9,842", chg:"+8.2%", up:true },
      { lbl:"Followers", num:"24.1K", chg:"+3.6%", up:true },
      { lbl:"Impressions", num:"312K", chg:"-1.2%", up:false },
    ],
    platforms: [
      { n:"Instagram", ic:"instagram", pct:82 },
      { n:"Facebook", ic:"facebook", pct:64 },
      { n:"LinkedIn", ic:"linkedin", pct:48 },
      { n:"X", ic:"twitter-x", pct:31 },
      { n:"Google Bus.", ic:"google", pct:22 },
    ],
    top: [
      { t:"New product launch! Behind the scenes look 🚀", l:"12.4K", c:"842", s:"312" },
      { t:"5 productivity tips for better work-life balance", l:"8.9K", c:"512", s:"241" },
      { t:"Grateful for our amazing community 🙌", l:"6.2K", c:"398", s:"180" },
    ],
  },
};
