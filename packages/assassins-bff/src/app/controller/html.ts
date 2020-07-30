import { Context, inject, controller, get, provide, config } from '@ali/midway';

@provide()
@controller('/htmlentry')
export class HtmlController {

  @inject()
  ctx: Context;

  @config('htmlentry')
  htmlentry: any;

  @get('/:appname')
  async index(): Promise<void> {
    const appname: string = this.ctx.params.appname;
    const { css, js } = this.htmlentry[appname];
    this.ctx.body = `
      <!doctype html>
      <html>
        <head>
          <title>dn-mfe-${appname}</title>
          <meta charset="utf-8" />
          <meta name="description" content="丹鸟微前端" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
          <link rel="shortcut icon" href="//img.alicdn.com/tfs/TB1x65gQmzqK1RjSZFpXXakSXXa-67-68.png" type="image/x-icon" />
          <link rel="stylesheet" type="text/css" href=${css} />
        </head>
        <body>
          <script src="${js}"></script>
        </body>
      </html>
    `;
  }
}
