const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

const _0x1747d0 = {
    pattern: 'apk2',
    react: '️🔰',
    desc: 'get applications',
    category: 'download',
    use: '.apk2 whatsapp',
    filename: __filename,
  }
  cmd(
    _0x1747d0,
    async (
      _0x3398bb,
      _0x390288,
      _0x266720,
      { from: _0x7ffdbd, q: _0x208959, pushname: _0x21a1c1, reply: _0x115443 }
    ) => {
      try {
        const _0x2f41e8 = await apkdl.search(_0x208959),
          _0x1dfc64 = _0x2f41e8
        let _0x577c29 =
          '> \uD83D\uDCE5 VAJIRA MD APKDL \uD83D\uDCE5\n\n\t APPLICATION DOWNLOADER \uD83D\uDCE5'
        const _0x22829b = []
        for (var _0x3b481e = 0; _0x3b481e < _0x1dfc64.length; _0x3b481e++) {
          _0x22829b.push({
            header: _0x3b481e + 1,
            title: '' + _0x1dfc64[_0x3b481e].name,
            description: '',
            id: '.dapk ' + _0x1dfc64[_0x3b481e].id,
          })
        }
        const _0x26b32b = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x189d68 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x26b32b),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x22829b,
                },
              ],
            }),
          },
        ]
        const _0x31975d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x577c29,
        }
        let _0x5e289f = _0x31975d
        return await _0x3398bb.sendButtonMessage(
          _0x7ffdbd,
          _0x189d68,
          _0x266720,
          _0x5e289f
        )
}catch(e){
console.log(e)
reply(`${e}`)
}
})
