// A wedding-planning agency for dogs: full ceremonies, cakes, and photos, paid for by devoted owners in premium per-event packages.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "We plan full weddings for dogs — vows, cake, and photos — and devoted owners pay premium packages, then book us again for birthdays and vow renewals.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
