// Description:
//   LoL の今日のチャンプ聞くことができるボット
//   ロールを決める簡単な機能ある
// Commands:
//   今日のチャンプ (top|jg|mid|adc|sup)  今日のチャンプを教えてくれる
//   ロール決めて [name] [name] [name] [name] [name] ロールを決めてくれる
'use strict';
module.exports = (robot) => {
	robot.hear(/(.+)/i, (msg) => {
		let text = run(msg.message.user.name, msg.match[1]);
		msg.send(text);
	});
};

let all_list = [
    "Aatrox http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Aatrox.png",
	"Ahri http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ahri.png",
	"Akali http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Akali.png",
	"Alistar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Alistar.png",
	"Amumu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Amumu.png",
	"Anivia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Anivia.png",
	"Annie http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Annie.png",
	"Ashe http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ashe.png",
	"Azir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Azir.png",
	"Bard http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Bard.png",
	"Blitzcrank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Blitzcrank.png",
	"Brand http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Brand.png",
	"Braum http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Braum.png",
	"Caitlyn http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Caitlyn.png",
	"Cassiopeia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Cassiopeia.png",
	"Cho'Gath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Chogath.png",
	"Corki http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Corki.png",
	"Darius http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Darius.png",
	"Diana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Diana.png",
	"Dr. Mundo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/DrMundo.png",
	"Draven http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Draven.png",
	"Ekko http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ekko.png",
	"Elise http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Elise.png",
	"Evelynn http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Evelynn.png",
	"Ezreal http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ezreal.png",
	"Fiddlesticks http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/FiddleSticks.png",
	"Fiora http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fiora.png",
	"Fizz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fizz.png",
	"Galio http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Galio.png",
	"Gangplank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gangplank.png",
	"Garen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Garen.png",
	"Gnar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gnar.png",
	"Gragas http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gragas.png",
	"Graves http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Graves.png",
	"Hecarim http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Hecarim.png",
	"Heimerdinger http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Heimerdinger.png",
	"Illaoi http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Illaoi.png",
	"Irelia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Irelia.png",
	"Janna http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Janna.png",
	"Jarvan IV http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/JarvanIV.png",
	"Jax http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jax.png",
	"Jayce http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jayce.png",
	"Jinx http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jinx.png",
	"Kalista http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kalista.png",
	"Karma http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Karma.png",
	"Karthus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Karthus.png",
	"Kassadin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kassadin.png",
	"Katarina http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Katarina.png",
	"Kayle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kayle.png",
	"Kennen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kennen.png",
	"Kha'Zix http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Khazix.png",
	"Kindred http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kindred.png",
	"Kog'Maw http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/KogMaw.png",
	"LeBlanc http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Leblanc.png",
	"Lee Sin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/LeeSin.png",
	"Leona http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Leona.png",
	"Lissandra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lissandra.png",
	"Lucian http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lucian.png",
	"Lulu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lulu.png",
	"Lux http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lux.png",
	"Malphite http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Malphite.png",
	"Malzahar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Malzahar.png",
	"Maokai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Maokai.png",
	"Master Yi http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MasterYi.png",
	"Miss Fortune http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MissFortune.png",
	"Mordekaiser http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Mordekaiser.png",
	"Morgana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Morgana.png",
	"Nami http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nami.png",
	"Nasus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nasus.png",
	"Nautilus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nautilus.png",
	"Nidalee http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nidalee.png",
	"Nocturne http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nocturne.png",
	"Nunu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nunu.png",
	"Olaf http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Olaf.png",
	"Orianna http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Orianna.png",
	"Pantheon http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Pantheon.png",
	"Poppy http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Poppy.png",
	"Quinn http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Quinn.png",
	"Rammus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rammus.png",
	"Rek'Sai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/RekSai.png",
	"Renekton http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Renekton.png",
	"Rengar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rengar.png",
	"Riven http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Riven.png",
	"Rumble http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rumble.png",
	"Ryze http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ryze.png",
	"Sejuani http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sejuani.png",
	"Shaco http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shaco.png",
	"Shen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shen.png",
	"Shyvana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shyvana.png",
	"Singed http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Singed.png",
	"Sion http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sion.png",
	"Sivir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sivir.png",
	"Skarner http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Skarner.png",
	"Sona http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sona.png",
	"Soraka http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Soraka.png",
	"Swain http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Swain.png",
	"Syndra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Syndra.png",
	"Tahm Kench http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TahmKench.png",
	"Talon http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Talon.png",
	"Taric http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Taric.png",
	"Teemo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Teemo.png",
	"Thresh http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Thresh.png",
	"Tristana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Tristana.png",
	"Trundle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Trundle.png",
	"Tryndamere http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Tryndamere.png",
	"Twisted Fate http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TwistedFate.png",
	"Twitch http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Twitch.png",
	"Udyr http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Udyr.png",
	"Urgot http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Urgot.png",
	"Varus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Varus.png",
	"Vayne http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vayne.png",
	"Veigar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Veigar.png",
	"Vel'Koz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Velkoz.png",
	"Vi http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vi.png",
	"Viktor http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Viktor.png",
	"Vladimir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vladimir.png",
	"Volibear http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Volibear.png",
	"Warwick http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Warwick.png",
	"Wukong http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MonkeyKing.png",
	"Xerath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Xerath.png",
	"Xin Zhao http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/XinZhao.png",
	"Yasuo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Yasuo.png",
	"Yorick http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Yorick.png",
	"Zac http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zac.png",
	"Zed http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zed.png",
	"Ziggs http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ziggs.png",
	"Zilean http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zilean.png",
	"Zyra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zyra.png"
];

let top_list = [
	"Tahm Kench http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TahmKench.png",
	"Ekko http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ekko.png",
	"Illaoi http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Illaoi.png",
    "Aatrox http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Aatrox.png",
    "Akali http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Akali.png",
    "Annie http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Annie.png",
    "Azir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Azir.png",
    "Cassiopeia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Cassiopeia.png",
    "Cho'Gath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Chogath.png",
    "Darius http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Darius.png",
    "Diana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Diana.png",
    "Dr. Mundo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/DrMundo.png",
    "Elise http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Elise.png",
    "Fiora http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fiora.png",
    "Fizz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fizz.png",
    "Galio http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Galio.png",
    "Gangplank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gangplank.png",
    "Garen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Garen.png",
    "Gnar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gnar.png",
    "Gragas http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gragas.png",
    "Hecarim http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Hecarim.png",
    "Heimerdinger http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Heimerdinger.png",
    "Irelia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Irelia.png",
    "Jarvan IV http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/JarvanIV.png",
    "Jax http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jax.png",
    "Jayce http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jayce.png",
    "Kassadin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kassadin.png",
    "Kayle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kayle.png",
    "Kennen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kennen.png",
    "Kha'Zix http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Khazix.png",
    "Lee Sin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/LeeSin.png",
    "Lissandra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lissandra.png",
    "Lulu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lulu.png",
    "Malphite http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Malphite.png",
    "Maokai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Maokai.png",
    "Mordekaiser http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Mordekaiser.png",
    "Nasus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nasus.png",
    "Nidalee http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nidalee.png",
    "Olaf http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Olaf.png",
    "Pantheon http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Pantheon.png",
    "Poppy http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Poppy.png",
    "Quinn http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Quinn.png",
    "Rek'Sai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/RekSai.png",
    "Renekton http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Renekton.png",
    "Rengar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rengar.png",
    "Riven http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Riven.png",
    "Rumble http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rumble.png",
    "Ryze http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ryze.png",
    "Shaco http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shaco.png",
    "Shen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shen.png",
    "Shyvana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shyvana.png",
    "Singed http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Singed.png",
    "Sion http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sion.png",
    "Swain http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Swain.png",
    "Teemo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Teemo.png",
    "Trundle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Trundle.png",
    "Tryndamere http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Tryndamere.png",
    "Udyr http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Udyr.png",
    "Urgot http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Urgot.png",
    "Vayne http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vayne.png",
    "Viktor http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Viktor.png",
    "Vladimir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vladimir.png",
    "Volibear http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Volibear.png",
    "Warwick http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Warwick.png",
    "Wukong http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MonkeyKing.png",
    "Xin Zhao http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/XinZhao.png",
    "Yasuo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Yasuo.png",
    "Yorick http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Yorick.png",
    "Zed http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zed.png"
];

let jg_list = [
	"Kindred http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kindred.png",
	"Tahm Kench http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TahmKench.png",
	"Ekko http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ekko.png",
    "Aatrox http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Aatrox.png",
    "Alistar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Alistar.png",
    "Amumu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Amumu.png",
    "Cho'Gath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Chogath.png",
    "Diana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Diana.png",
    "Dr. Mundo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/DrMundo.png",
    "Elise http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Elise.png",
    "Evelynn http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Evelynn.png",
    "Fiddlesticks http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/FiddleSticks.png",
    "Fiora http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fiora.png",
    "Fizz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fizz.png",
    "Gangplank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gangplank.png",
    "Gragas http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gragas.png",
    "Hecarim http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Hecarim.png",
    "Irelia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Irelia.png",
    "Jarvan IV http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/JarvanIV.png",
    "Jax http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jax.png",
    "Kayle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kayle.png",
    "Kha'Zix http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Khazix.png",
    "Lee Sin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/LeeSin.png",
    "Malphite http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Malphite.png",
    "Maokai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Maokai.png",
    "Master Yi http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MasterYi.png",
    "Nasus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nasus.png",
    "Nautilus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nautilus.png",
    "Nidalee http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nidalee.png",
    "Nocturne http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nocturne.png",
    "Nunu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nunu.png",
    "Olaf http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Olaf.png",
    "Pantheon http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Pantheon.png",
    "Poppy http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Poppy.png",
    "Rammus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rammus.png",
    "Rek'Sai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/RekSai.png",
    "Rengar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rengar.png",
    "Sejuani http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sejuani.png",
    "Shaco http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shaco.png",
    "Shen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shen.png",
    "Shyvana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Shyvana.png",
    "Sion http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sion.png",
    "Trundle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Trundle.png",
    "Tryndamere http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Tryndamere.png",
    "Udyr http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Udyr.png",
    "Vi http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vi.png",
    "Volibear http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Volibear.png",
    "Warwick http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Warwick.png",
    "Wukong http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MonkeyKing.png",
    "Xin Zhao http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/XinZhao.png",
    "Zac http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zac.png",
];

let mid_list = [
	"Ekko http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ekko.png",
    "Ahri http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ahri.png",
    "Akali http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Akali.png",
    "Anivia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Anivia.png",
    "Annie http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Annie.png",
    "Azir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Azir.png",
    "Brand http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Brand.png",
    "Cassiopeia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Cassiopeia.png",
    "Cho'Gath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Chogath.png",
    "Corki http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Corki.png",
    "Diana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Diana.png",
    "Ezreal http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ezreal.png",
    "Fiddlesticks http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/FiddleSticks.png",
    "Fizz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Fizz.png",
    "Galio http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Galio.png",
    "Gangplank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gangplank.png",
    "Gragas http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gragas.png",
    "Heimerdinger http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Heimerdinger.png",
    "Irelia http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Irelia.png",
    "Jayce http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jayce.png",
    "Karma http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Karma.png",
    "Karthus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Karthus.png",
    "Kassadin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kassadin.png",
    "Katarina http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Katarina.png",
    "Kayle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kayle.png",
    "Kennen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kennen.png",
    "Kog'Maw http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/KogMaw.png",
    "LeBlanc http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Leblanc.png",
    "Lee Sin http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/LeeSin.png",
    "Lissandra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lissandra.png",
    "Lulu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lulu.png",
    "Lux http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lux.png",
    "Malzahar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Malzahar.png",
    "Maokai http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Maokai.png",
    "Mordekaiser http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Mordekaiser.png",
    "Morgana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Morgana.png",
    "Nidalee http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nidalee.png",
    "Nunu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nunu.png",
    "Orianna http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Orianna.png",
    "Riven http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Riven.png",
    "Rumble http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rumble.png",
    "Ryze http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ryze.png",
    "Sona http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sona.png",
    "Soraka http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Soraka.png",
    "Swain http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Swain.png",
    "Syndra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Syndra.png",
    "Talon http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Talon.png",
    "Teemo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Teemo.png",
    "Thresh http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Thresh.png",
    "Tristana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Tristana.png",
    "Twisted Fate http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TwistedFate.png",
    "Urgot http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Urgot.png",
    "Veigar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Veigar.png",
    "Vel'Koz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Velkoz.png",
    "Viktor http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Viktor.png",
    "Vladimir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vladimir.png",
    "Xerath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Xerath.png",
    "Yasuo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Yasuo.png",
    "Zed http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zed.png",
    "Ziggs http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ziggs.png",
    "Zilean http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zilean.png",
    "Zyra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zyra.png"
];

let adc_list = [
	"Kindred http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kindred.png",
    "Ashe http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ashe.png",
    "Caitlyn http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Caitlyn.png",
    "Corki http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Corki.png",
    "Draven http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Draven.png",
    "Ezreal http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ezreal.png",
    "Graves http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Graves.png",
    "Jayce http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jayce.png",
    "Jinx http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Jinx.png",
    "Kalista http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kalista.png",
    "Kog'Maw http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/KogMaw.png",
    "Lucian http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lucian.png",
    "Miss Fortune http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/MissFortune.png",
    "Sivir http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sivir.png",
    "Tristana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Tristana.png",
    "Teemo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Teemo.png",
    "Twitch http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Twitch.png",
    "Urgot http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Urgot.png",
    "letus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/letus.png",
    "Vayne http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Vayne.png",
    "Twisted Fate http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TwistedFate.png",
    "Morgana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Morgana.png"
];

let sup_list = [
	"Bard http://www.mobafire.com/images/champion/icon/bard.png",
	"Tahm Kench http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/TahmKench.png",
    "Ahri http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ahri.png",
    "Alistar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Alistar.png",
    "Amumu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Amumu.png",
    "Annie http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Annie.png",
    "Ashe http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Ashe.png",
    "Blitzcrank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Blitzcrank.png",
    "Brand http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Brand.png",
    "Braum http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Braum.png",
    "Cho'Gath http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Chogath.png",
    "Fiddlesticks http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/FiddleSticks.png",
    "Gangplank http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Gangplank.png",
    "Garen http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Garen.png",
    "Janna http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Janna.png",
    "Karma http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Karma.png",
    "Kayle http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Kayle.png",
    "Leona http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Leona.png",
    "Lulu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lulu.png",
    "Lux http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Lux.png",
    "Malphite http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Malphite.png",
    "Morgana http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Morgana.png",
    "Nami http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nami.png",
    "Nautilus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nautilus.png",
    "Nidalee http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nidalee.png",
    "Nunu http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Nunu.png",
    "Orianna http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Orianna.png",
    "Poppy http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Poppy.png",
    "Rammus http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Rammus.png",
    "Sona http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Sona.png",
    "Soraka http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Soraka.png",
    "Teemo http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Teemo.png",
    "Thresh http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Thresh.png",
    "Veigar http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Veigar.png",
    "Vel'Koz http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Velkoz.png",
    "Volibear http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Volibear.png",
    "Zilean http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zilean.png",
    "Zyra http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/Zyra.png",
    "Bard http://www.mobafire.com/images/champion/icon/bard.png"
];

function getRandom(l, name) {
    let i = l[Math.floor(Math.random()*l.length)];
    return name +"、こいつ使えよ " + i;
}

function shuffle(list) {
    list = list.slice();
    let i = list.length;
    if (i === 0) { return list; }

    while (--i) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
}

function decideRole(summoners) {
    if (summoners.length < 5) {
        return summoners.length + "人じゃあ遊べねぇよ...";
    }

    let shuffled = shuffle(summoners);
    let output = "";
    output +=   "Top: "   + shuffled[0];
    output += ", Jngle: " + shuffled[1];
    output += ", Mid: "   + shuffled[2];
    output += ", Sup: "   + shuffled[3];
    output += ", ADC: "   + shuffled[4];
    if (shuffled.length > 5) {
        output += ", 補欠: " + shuffled.slice(5).join(" ");
    }
    return output;
}

function run(name, text) {
    if (text.indexOf("今日のチャンプ") === 0) {
        if (text.indexOf("mid") > 0) {
            return getRandom(mid_list, name);
        } else if (text.indexOf("top") > 0) {
            return getRandom(top_list, name);
        } else if (text.indexOf("jg") > 0 || text.indexOf("jungle") > 0) {
            return getRandom(jg_list, name);
        } else if (text.indexOf("adc") > 0) {
            return getRandom(adc_list, name);
        } else if (text.indexOf("sup") > 0) {
            return getRandom(sup_list, name);
        } else {
            return getRandom(all_list, name);
        }
    } else if (text.indexOf("ロール決めて") === 0) {
        let summoners = text.split(/\s+/).slice(1);
        return decideRole(summoners);
    }
    return "";
}
