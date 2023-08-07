import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import Link from "next/link"
import { absoluteURL } from "lib/utils"
import Talk from 'talkjs';
import { useState, useEffect, useRef  } from "react";


import { ChevronRightIcon } from '@heroicons/react/20/solid'



export function ChatContent({ node, user }: ChatContentProps) {


  const mary = {
    id: user.id,
    name: user.display_name,
    email: user.mail,
    photoUrl: absoluteURL(user.user_picture?.uri.url),
    welcomeMessage: 'Hello, what can I do for you?',
    role: 'default',
  };


  function converse(user) {

    Talk.ready.then(() => {


      const currentUser = new Talk.User({
        id: node.id,
        name: node.display_name,
        email: node.mail,
        photoUrl: absoluteURL(node.user_picture?.uri.url),
        welcomeMessage: 'Patati!',
        role: 'default',
      });

      const session = new Talk.Session({
        appId: 'tRgMuGQq',
        me: currentUser,
      });

      const conversation = session.getOrCreateConversation(
    Talk.oneOnOneId(currentUser, otherUser)
  );

  conversation.setParticipant(currentUser);
      const otherUser = new Talk.User(user);
  const chatbox = session.createChatbox();
  chatbox.select(conversation);
  chatbox.mount(chatboxEl.current);

    });
  }



  const chatboxEl = useRef();


  return (
    <>
<section>

    <button onClick={() => converse(mary)}>

    {user.display_name}
    </button>
  </section>

         <div class="grid grid-cols-12 gap-4">
   <div class="col-span-12" ref={chatboxEl} />


   <br/>

   </div>
    </>
  );
}
