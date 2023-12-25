"use client";
import React from 'react'
import { Disclosure } from '@headlessui/react'

export default function About() {
  return (
    <main className="flex-grow">
        <div className="container flex flex-col mx-auto py-20 px-6">
          <div className="max-w-lg">
                <div>
                    <h1 className="font-semibold text-2xl"> about me </h1>
                    <p className="py-3">
                        my name is ungku amer iskandar, born and raised in malaysia,
                        continued my studies in the united kingdom. most of my time
                        were spent exploring and learning new things.
                    </p>
                    <p className="py-3">
                        my interest are running, coffee, computers and traveling among
                        many other things. music taste includes classical and 'modern' classical 
                        musics.
                    </p>
                </div>
                <div className='pt-5'>
                    <Disclosure>
                        <Disclosure.Button>
                            <div className='flex items-center justify-center'>
                                <a className='underline underline-offset-4'>countries i've been to</a>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <p className='py-3'> 24 countries (updated 11/01/24)</p>
                            <p>
                            albania, austria, bosnia, croatia, estonia, france, germany,
                            greece, italy, latvia, lithuania, macedonia, portugal, serbia, spain,
                            switzerland, united kingdom, vatican city, turkey,
                            australia, china, hong kong, indonesia, japan, malaysia,
                            singapore, thailand
                            </p>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
                <div className='pt-5'>
                    <Disclosure>
                        <Disclosure.Button>
                            <div className='flex items-center justify-center'>
                                <a className='underline underline-offset-4'>music i listen to</a>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <p className='py-3'>
                                <ul>
                                    <li>&#x2022; <a href='https://open.spotify.com/track/5YA1wDs3WUtpiFpHzcSl4C?si=9f5edefd05f84385'> bach to the future - levi.sct </a></li>
                                    <li>&#x2022; <a href='https://www.youtube.com/watch?v=EkwqPJZe8ms&t=1743s&pp=ygUSdGhlIHJpdGUgb2Ygc3ByaW5n'> the rite of spring - igor stravinsky </a></li>
                                </ul>
                            </p>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
                <div className='pt-5'>
                    <Disclosure>
                        <Disclosure.Button>
                            <div className='flex items-center justify-center'>
                                <a className='underline underline-offset-4'>socials and ways to contact</a>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <p className='py-3'>
                                <ul>
                                    <li>&#x2022; <a href='mailto:ungkuamer@gmail.com'> email - ungkuamer@gmail.com </a></li>
                                    <li>&#x2022; <a href='https://github.com/ungkuamer'> github - ungkuamer </a></li>
                                    <li>&#x2022; <a href='https://www.strava.com/athletes/116725063'> strava - ungku amer ungku aziz</a></li>
                                </ul>
                            </p>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
                <div className='py-20 text-sm'>
                    made using nextjs and tailwind
                </div>
          </div>
        </div>
    </main>
  )
}
