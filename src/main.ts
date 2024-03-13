import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const sessionRepo = app.get(DataSource).getRepository(Session);
  // app.use(
  //   ExpressSession({
  //     secret: process.env.SESSION_SECRET,
  //     resave: true,
  //     name: process.env.SESSION_NAME,
  //     saveUninitialized: true,
  //     cookie: { maxAge: Number(process.env.COOKIE_MAX_AGE) },
  //     store: new TypeormStore().connect(sessionRepo),
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());

  // const config=new DocumentBuilder().setTitle("Swagger Api").setDescription("This is rest Api").setVersion("1.1.0").build();
  // const document=SwaggerModule.createDocument(app,config);
  // SwaggerModule.setup('/',app,document);
  await app.listen(3000);
}
bootstrap();
