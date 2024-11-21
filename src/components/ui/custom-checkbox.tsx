'use client'

import { useState } from "react";
import { Checkbox } from "./checkbox";

export default function CheckboxFilter ({ id, text } : { id: string, text: string }) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  return (
    <div className="flex items-center space-x-2">
      <Checkbox onCheckedChange={(check: boolean) => setIsChecked(check)} className="rounded" id={id} />
      <label
        htmlFor={id}
        className={`text-sm ${isChecked ? 'font-semibold' : ''}`}
      >
        {text}
      </label>
    </div>
  )
} 
