import React from "react"
import Toot from "./toot"

export default () => (
  <div className="toot-box">
    <Toot langCode="en" langName="English" text="a toot" />
    <Toot langCode="es" langName="español" text="un pedo" />
    <Toot langCode="fr" langName="français" text="un pet" />
    <Toot langCode="pt" langName="português" text="um peido" />
    <Toot langCode="ja" langName="日本語" text="おなら" />
    <Toot langCode="ru" langName="русский" text="пердеть" />
  </div>
)
