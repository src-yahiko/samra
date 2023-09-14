"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Fragment, useState } from "react"

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const commands: any = {
    "Artikel": {
      "Alle": "ara",
      "Erstellen": "arn",
      "Bearbeiten": "arb",
    },
    "Journal": {
      "Neue Rechnung": "jnr",
      "Monat": "jem",
      "Quartal": "jeq",
      "Jahr": "jej",
    },
    "Kunden": {
      "Erstellen": "kun",
      "Profil": "kup",
      "Alle": "kua"
    },
    "Befehle": {
      "Benutzerverwaltung": "xbv",
      "Datenbankverwaltung": "dbm",
      "Datenbank auswählen": "xdb",
      "Abmelden": "bye",
      "Beenden": "xqa",
    }
  }
  const [searchValue, setSearchValue] = useState("")
  return (
    <html lang="en">
      <body className={inter.className + ""} onClick={() => setSearchValue("")}>
        <header className='z-10'>
          <Command className="group top-0 left-0">
            <CommandInput value={searchValue} onInput={(e) => setSearchValue(e.currentTarget.value)} placeholder="Zum suchen Befehl eingeben..." />
            <CommandList className={`z-10 absolute w-full mt-10 bg-gray-100 hidden ${searchValue.length > 0 && "block hover:block"} group-focus:block max-h-fit`}>
              <CommandEmpty>Keine Ergebnisse gefunden.</CommandEmpty>
              {
                Object.keys(commands).map((commandGroup) =>
                  <Fragment key={commandGroup}><CommandGroup heading={commandGroup.toUpperCase()}>
                    {
                      Object.keys(commands[commandGroup]).map((commandName) => <CommandItem onSelect={() => alert(commands[commandGroup][commandName])} key={commands[commandGroup][commandName]}>
                        <span className="text-xs opacity-50 bg-gray-300 rounded-2xl px-2 scale-75 mr-1 w-10 text-center">{commands[commandGroup][commandName]}</span>{commandGroup}: {commandName}
                      </CommandItem>)
                    }
                  </CommandGroup>
                    <CommandSeparator />
                  </Fragment>
                )
              }
            </CommandList>
          </Command>
        </header>
        <main className='p-4 h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
