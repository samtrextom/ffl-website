export const getFtvalues=(players)=>{

    const ftvalues = {}

        ftvalues.qbft=0
        ftvalues.rbft=0
        ftvalues.wrft=0
        ftvalues.teft=0

        const qbs = players?players.filter(player=>(player.position==='QB')).sort((a,b)=>{return b.salary-a.salary}).slice(0,10).forEach(element => {ftvalues.qbft+=parseInt(element.salary)}):null
        const rbs = players?players.filter(player=>(player.position==='RB')).sort((a,b)=>{return b.salary-a.salary}).slice(0,10).forEach(element => {ftvalues.rbft+=parseInt(element.salary)}):null
        const wrs = players?players.filter(player=>(player.position==='WR')).sort((a,b)=>{return b.salary-a.salary}).slice(0,10).forEach(element => {ftvalues.wrft+=parseInt(element.salary)}):null
        const tes = players?players.filter(player=>(player.position==='TE')).sort((a,b)=>{return b.salary-a.salary}).slice(0,10).forEach(element => {ftvalues.teft+=parseInt(element.salary)}):null

        ftvalues.qbft=Math.floor(ftvalues.qbft/10)
        ftvalues.rbft=Math.floor(ftvalues.rbft/10)
        ftvalues.wrft=Math.floor(ftvalues.wrft/10)
        ftvalues.teft=Math.floor(ftvalues.teft/10)

        return ftvalues
}

export const getNextYearSalary=(data)=>{

    const newSalary = data.player.servicetime>2?
        data.player.position==='QB'?
            data.ftvalues.qbft:data.player.position==='RB'?
            data.ftvalues.rbft:data.player.position==='WR'?
            data.ftvalues.wrft:data.player.position==='TE'?
            data.ftvalues.teft:5:data.player.salary<5?5:data.player.salary<10?
                    10:Math.floor(data.player.salary*1.1)

    return newSalary

}

