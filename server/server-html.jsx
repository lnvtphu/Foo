import React from 'react'

type Props = {
  body: string,
  assets: Object,
  locale: string,
  title: string,
  description: string
};

function ServerHTML(props: Props) {
  const { body, assets, locale, title, description } = props

  return (
    <html lang={ locale }>
      <head>
        <meta charSet='utf-8' />

        {/* Styles */}
        <link rel='icon' type='image/ico' href='/favicon.ico' />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.2/socket.io.js"></script>
        { assets.style.map((href, idx) =>
          <link key={ idx } rel='stylesheet' href={ href } />) }

        {/* SEO */}
        <title>{ title }</title>
        <meta name='description' content={ description } />
      </head>
      <body>
        <div id='content' dangerouslySetInnerHTML={ { __html: body } } />
        <script src={ assets.script[0] } />
        <script async={ true } defer={ true } id='github-bjs' src='https://buttons.github.io/buttons.js' />
      </body>
    </html>
  )
}

export default ServerHTML
