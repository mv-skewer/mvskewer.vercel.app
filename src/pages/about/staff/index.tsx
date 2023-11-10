import Link from 'next/link'
import StaffCard from '@/components/StaffCard'
import Page from '@/components/Page'

import styles from "@/styles/staff/Staff.module.css";

export default function Home() {
  return (
    <Page
      description="staff info page idk ***fill this out later***"
      title="Staff"
      h1="Staff Page"
      h2="about our staff"
    >
      <div className={styles.cardContainer}>
        <StaffCard name="Yongle" img="yongle">
          <p>Former Emperor of the Ming Dynasty and now the head of The Skewer. He never got tired of being in charge, apparently.</p>
        </StaffCard>
        <StaffCard name="Torbjörn Roger Halsten Herman Adolfsson" img="torbjörn-roger-halsten-herman-adolfsson">
          <p>Co-Founder of the Skewer and Executive Editor. Spends more time working on the webstite than actually working on his articles.</p>
        </StaffCard>
        <StaffCard name="Amio Koivunen" img="amio-koivunen">
          <p>Juanma&apos;s #1 fan</p>
        </StaffCard>
        <StaffCard name="C. Near" img="c-near">
          <p>A former viewer writer, now a senior and not ready for life.</p>
        </StaffCard>
        <StaffCard name="Dr. Silly" img="dr-silly">
          <p>&quot;I am the fight reporter. I report on fights and sometimes rate them on the violence and the amount of people involved.&quot;</p>
        </StaffCard>
        <StaffCard name="Fullpetal Alchemist" img="fullpetal-alchemist">
          <p>&quot;Who am I, you ask?</p>
          <p>A poet, a journalist,</p>
          <p>and sometimes funny.&quot;</p>
          <br />
          <p>It&apos;s our honor to have Fullpetal Alchemist, an esteemed poet and journalist, on our staff. They&apos;re known best for poetry published on their extremely popular Wattpad profile, <Link href="https://www.wattpad.com/user/BlessedBlossomBoi" target="_blank">BlessedBlossomBoi</Link>, and for their deep, insightful analysis of high school issues. They also take a passing interest in chess, school-scale news, and arguing about frivolous things in the debate section.</p>
          <br />
          <p>You may challenge them to a game of chess here: <Link href="https://lichess.org/@/Stupidity" target="_blank">lichess.org/@/Stupdity</Link></p>
        </StaffCard>
        <StaffCard name="J. Balvin" img="j-balvin">
          17, student, saxophone player, magic the gathering officianado, one piece addict.
        </StaffCard>
      </div>
    </Page>
  );
}