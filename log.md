# 2019-05-15

```
[INFO] Scanning for projects...
[INFO] 
[INFO] -------------------< com.example.fabrikam:TodoDemo >--------------------
[INFO] Building TodoDemo 0.0.1-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] >>> spring-boot-maven-plugin:1.5.3.RELEASE:run (default-cli) > test-compile @ TodoDemo >>>
[INFO] 
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ TodoDemo ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 19 resources
[INFO] Copying 5 resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ TodoDemo ---
[INFO] Nothing to compile - all classes are up to date
[INFO] 
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ TodoDemo ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory C:\Users\wrk\workspace\todo\src\test\resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ TodoDemo ---
[INFO] Nothing to compile - all classes are up to date
[INFO] 
[INFO] <<< spring-boot-maven-plugin:1.5.3.RELEASE:run (default-cli) < test-compile @ TodoDemo <<<
[INFO] 
[INFO] 
[INFO] --- spring-boot-maven-plugin:1.5.3.RELEASE:run (default-cli) @ TodoDemo ---

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v1.5.3.RELEASE)

2019-05-15 20:11:28.989  INFO 6568 --- [           main] c.e.f.TodoDemo.TodoDemoApplication       : Starting TodoDemoApplication on DESKTOP-Q7NJT1G with PID 6568 (C:\Users\wrk\workspace\todo\target\classes started by wrk in C:\Users\wrk\workspace\todo)
2019-05-15 20:11:29.004  INFO 6568 --- [           main] c.e.f.TodoDemo.TodoDemoApplication       : No active profile set, falling back to default profiles: default
2019-05-15 20:11:29.124  INFO 6568 --- [           main] ationConfigEmbeddedWebApplicationContext : Refreshing org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext@149c09d: startup date [Wed May 15 20:11:29 CST 2019]; root of context hierarchy
2019-05-15 20:11:31.941  INFO 6568 --- [           main] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat initialized with port(s): 8080 (http)
2019-05-15 20:11:31.963  INFO 6568 --- [           main] o.apache.catalina.core.StandardService   : Starting service Tomcat
2019-05-15 20:11:31.964  INFO 6568 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/8.5.14
2019-05-15 20:11:32.177  INFO 6568 --- [ost-startStop-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2019-05-15 20:11:32.178  INFO 6568 --- [ost-startStop-1] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 3075 ms
2019-05-15 20:11:32.502  INFO 6568 --- [ost-startStop-1] o.s.b.w.servlet.ServletRegistrationBean  : Mapping servlet: 'dispatcherServlet' to [/]
2019-05-15 20:11:32.512  INFO 6568 --- [ost-startStop-1] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'characterEncodingFilter' to: [/*]
2019-05-15 20:11:32.513  INFO 6568 --- [ost-startStop-1] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
2019-05-15 20:11:32.513  INFO 6568 --- [ost-startStop-1] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'httpPutFormContentFilter' to: [/*]
2019-05-15 20:11:32.514  INFO 6568 --- [ost-startStop-1] o.s.b.w.servlet.FilterRegistrationBean   : Mapping filter: 'requestContextFilter' to: [/*]
2019-05-15 20:11:32.582  WARN 6568 --- [           main] ationConfigEmbeddedWebApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'scheduleController' defined in file [C:\Users\wrk\workspace\todo\target\classes\com\example\fabrikam\TodoDemo\ScheduleController.class]: Post-processing of merged bean definition failed; nested exception is java.lang.IllegalStateException: Failed to introspect bean class [com.example.fabrikam.TodoDemo.ScheduleController] for resource metadata: could not find class that it depends on
2019-05-15 20:11:32.584  INFO 6568 --- [           main] o.apache.catalina.core.StandardService   : Stopping service Tomcat
2019-05-15 20:11:32.723  INFO 6568 --- [           main] utoConfigurationReportLoggingInitializer : 

Error starting ApplicationContext. To display the auto-configuration report re-run your application with 'debug' enabled.
2019-05-15 20:11:32.745 ERROR 6568 --- [           main] o.s.boot.SpringApplication               : Application startup failed

org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'scheduleController' defined in file [C:\Users\wrk\workspace\todo\target\classes\com\example\fabrikam\TodoDemo\ScheduleController.class]: Post-processing of merged bean definition failed; nested exception is java.lang.IllegalStateException: Failed to introspect bean class [com.example.fabrikam.TodoDemo.ScheduleController] for resource metadata: could not find class that it depends on
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:526) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:483) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:197) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:761) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:866) ~[spring-context-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:542) ~[spring-context-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.boot.context.embedded.EmbeddedWebApplicationContext.refresh(EmbeddedWebApplicationContext.java:122) ~[spring-boot-1.5.3.RELEASE.jar:1.5.3.RELEASE]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:737) ~[spring-boot-1.5.3.RELEASE.jar:1.5.3.RELEASE]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:370) ~[spring-boot-1.5.3.RELEASE.jar:1.5.3.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:314) ~[spring-boot-1.5.3.RELEASE.jar:1.5.3.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1162) ~[spring-boot-1.5.3.RELEASE.jar:1.5.3.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1151) ~[spring-boot-1.5.3.RELEASE.jar:1.5.3.RELEASE]
	at com.example.fabrikam.TodoDemo.TodoDemoApplication.main(TodoDemoApplication.java:25) ~[classes/:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:na]
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:566) ~[na:na]
	at org.springframework.boot.maven.AbstractRunMojo$LaunchRunner.run(AbstractRunMojo.java:527) ~[na:na]
	at java.base/java.lang.Thread.run(Thread.java:834) ~[na:na]
Caused by: java.lang.IllegalStateException: Failed to introspect bean class [com.example.fabrikam.TodoDemo.ScheduleController] for resource metadata: could not find class that it depends on
	at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.findResourceMetadata(CommonAnnotationBeanPostProcessor.java:344) ~[spring-context-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.postProcessMergedBeanDefinition(CommonAnnotationBeanPostProcessor.java:297) ~[spring-context-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyMergedBeanDefinitionPostProcessors(AbstractAutowireCapableBeanFactory.java:992) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:523) ~[spring-beans-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	... 21 common frames omitted
Caused by: java.lang.NoClassDefFoundError: org/springframework/data/repository/CrudRepository
	at java.base/java.lang.ClassLoader.defineClass1(Native Method) ~[na:na]
	at java.base/java.lang.ClassLoader.defineClass(ClassLoader.java:1016) ~[na:na]
	at java.base/java.security.SecureClassLoader.defineClass(SecureClassLoader.java:174) ~[na:na]
	at java.base/java.net.URLClassLoader.defineClass(URLClassLoader.java:550) ~[na:na]
	at java.base/java.net.URLClassLoader$1.run(URLClassLoader.java:458) ~[na:na]
	at java.base/java.net.URLClassLoader$1.run(URLClassLoader.java:452) ~[na:na]
	at java.base/java.security.AccessController.doPrivileged(Native Method) ~[na:na]
	at java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:451) ~[na:na]
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:588) ~[na:na]
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:521) ~[na:na]
	at java.base/java.lang.Class.getDeclaredFields0(Native Method) ~[na:na]
	at java.base/java.lang.Class.privateGetDeclaredFields(Class.java:3062) ~[na:na]
	at java.base/java.lang.Class.getDeclaredFields(Class.java:2249) ~[na:na]
	at org.springframework.util.ReflectionUtils.getDeclaredFields(ReflectionUtils.java:715) ~[spring-core-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.util.ReflectionUtils.doWithLocalFields(ReflectionUtils.java:656) ~[spring-core-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.buildResourceMetadata(CommonAnnotationBeanPostProcessor.java:361) ~[spring-context-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.findResourceMetadata(CommonAnnotationBeanPostProcessor.java:340) ~[spring-context-4.3.8.RELEASE.jar:4.3.8.RELEASE]
	... 24 common frames omitted
Caused by: java.lang.ClassNotFoundException: org.springframework.data.repository.CrudRepository
	at java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:471) ~[na:na]
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:588) ~[na:na]
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:521) ~[na:na]
	... 41 common frames omitted

[WARNING] 
java.lang.reflect.InvocationTargetException
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)
    at jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke (Method.java:566)
    at org.springframework.boot.maven.AbstractRunMojo$LaunchRunner.run (AbstractRunMojo.java:527)
    at java.lang.Thread.run (Thread.java:834)
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'scheduleController' defined in file [C:\Users\wrk\workspace\todo\target\classes\com\example\fabrikam\TodoDemo\ScheduleController.class]: Post-processing of merged bean definition failed; nested exception is java.lang.IllegalStateException: Failed to introspect bean class [com.example.fabrikam.TodoDemo.ScheduleController] for resource metadata: could not find class that it depends on
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean (AbstractAutowireCapableBeanFactory.java:526)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean (AbstractAutowireCapableBeanFactory.java:483)
    at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject (AbstractBeanFactory.java:306)
    at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton (DefaultSingletonBeanRegistry.java:230)
    at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean (AbstractBeanFactory.java:302)
    at org.springframework.beans.factory.support.AbstractBeanFactory.getBean (AbstractBeanFactory.java:197)
    at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons (DefaultListableBeanFactory.java:761)
    at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization (AbstractApplicationContext.java:866)
    at org.springframework.context.support.AbstractApplicationContext.refresh (AbstractApplicationContext.java:542)
    at org.springframework.boot.context.embedded.EmbeddedWebApplicationContext.refresh (EmbeddedWebApplicationContext.java:122)
    at org.springframework.boot.SpringApplication.refresh (SpringApplication.java:737)
    at org.springframework.boot.SpringApplication.refreshContext (SpringApplication.java:370)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:314)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1162)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1151)
    at com.example.fabrikam.TodoDemo.TodoDemoApplication.main (TodoDemoApplication.java:25)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)
    at jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke (Method.java:566)
    at org.springframework.boot.maven.AbstractRunMojo$LaunchRunner.run (AbstractRunMojo.java:527)
    at java.lang.Thread.run (Thread.java:834)
Caused by: java.lang.IllegalStateException: Failed to introspect bean class [com.example.fabrikam.TodoDemo.ScheduleController] for resource metadata: could not find class that it depends on
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.findResourceMetadata (CommonAnnotationBeanPostProcessor.java:344)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.postProcessMergedBeanDefinition (CommonAnnotationBeanPostProcessor.java:297)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyMergedBeanDefinitionPostProcessors (AbstractAutowireCapableBeanFactory.java:992)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean (AbstractAutowireCapableBeanFactory.java:523)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean (AbstractAutowireCapableBeanFactory.java:483)
    at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject (AbstractBeanFactory.java:306)
    at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton (DefaultSingletonBeanRegistry.java:230)
    at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean (AbstractBeanFactory.java:302)
    at org.springframework.beans.factory.support.AbstractBeanFactory.getBean (AbstractBeanFactory.java:197)
    at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons (DefaultListableBeanFactory.java:761)
    at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization (AbstractApplicationContext.java:866)
    at org.springframework.context.support.AbstractApplicationContext.refresh (AbstractApplicationContext.java:542)
    at org.springframework.boot.context.embedded.EmbeddedWebApplicationContext.refresh (EmbeddedWebApplicationContext.java:122)
    at org.springframework.boot.SpringApplication.refresh (SpringApplication.java:737)
    at org.springframework.boot.SpringApplication.refreshContext (SpringApplication.java:370)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:314)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1162)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1151)
    at com.example.fabrikam.TodoDemo.TodoDemoApplication.main (TodoDemoApplication.java:25)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)
    at jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke (Method.java:566)
    at org.springframework.boot.maven.AbstractRunMojo$LaunchRunner.run (AbstractRunMojo.java:527)
    at java.lang.Thread.run (Thread.java:834)
Caused by: java.lang.NoClassDefFoundError: org/springframework/data/repository/CrudRepository
    at java.lang.ClassLoader.defineClass1 (Native Method)
    at java.lang.ClassLoader.defineClass (ClassLoader.java:1016)
    at java.security.SecureClassLoader.defineClass (SecureClassLoader.java:174)
    at java.net.URLClassLoader.defineClass (URLClassLoader.java:550)
    at java.net.URLClassLoader$1.run (URLClassLoader.java:458)
    at java.net.URLClassLoader$1.run (URLClassLoader.java:452)
    at java.security.AccessController.doPrivileged (Native Method)
    at java.net.URLClassLoader.findClass (URLClassLoader.java:451)
    at java.lang.ClassLoader.loadClass (ClassLoader.java:588)
    at java.lang.ClassLoader.loadClass (ClassLoader.java:521)
    at java.lang.Class.getDeclaredFields0 (Native Method)
    at java.lang.Class.privateGetDeclaredFields (Class.java:3062)
    at java.lang.Class.getDeclaredFields (Class.java:2249)
    at org.springframework.util.ReflectionUtils.getDeclaredFields (ReflectionUtils.java:715)
    at org.springframework.util.ReflectionUtils.doWithLocalFields (ReflectionUtils.java:656)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.buildResourceMetadata (CommonAnnotationBeanPostProcessor.java:361)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.findResourceMetadata (CommonAnnotationBeanPostProcessor.java:340)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.postProcessMergedBeanDefinition (CommonAnnotationBeanPostProcessor.java:297)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyMergedBeanDefinitionPostProcessors (AbstractAutowireCapableBeanFactory.java:992)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean (AbstractAutowireCapableBeanFactory.java:523)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean (AbstractAutowireCapableBeanFactory.java:483)
    at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject (AbstractBeanFactory.java:306)
    at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton (DefaultSingletonBeanRegistry.java:230)
    at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean (AbstractBeanFactory.java:302)
    at org.springframework.beans.factory.support.AbstractBeanFactory.getBean (AbstractBeanFactory.java:197)
    at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons (DefaultListableBeanFactory.java:761)
    at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization (AbstractApplicationContext.java:866)
    at org.springframework.context.support.AbstractApplicationContext.refresh (AbstractApplicationContext.java:542)
    at org.springframework.boot.context.embedded.EmbeddedWebApplicationContext.refresh (EmbeddedWebApplicationContext.java:122)
    at org.springframework.boot.SpringApplication.refresh (SpringApplication.java:737)
    at org.springframework.boot.SpringApplication.refreshContext (SpringApplication.java:370)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:314)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1162)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1151)
    at com.example.fabrikam.TodoDemo.TodoDemoApplication.main (TodoDemoApplication.java:25)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)
    at jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke (Method.java:566)
    at org.springframework.boot.maven.AbstractRunMojo$LaunchRunner.run (AbstractRunMojo.java:527)
    at java.lang.Thread.run (Thread.java:834)
Caused by: java.lang.ClassNotFoundException: org.springframework.data.repository.CrudRepository
    at java.net.URLClassLoader.findClass (URLClassLoader.java:471)
    at java.lang.ClassLoader.loadClass (ClassLoader.java:588)
    at java.lang.ClassLoader.loadClass (ClassLoader.java:521)
    at java.lang.ClassLoader.defineClass1 (Native Method)
    at java.lang.ClassLoader.defineClass (ClassLoader.java:1016)
    at java.security.SecureClassLoader.defineClass (SecureClassLoader.java:174)
    at java.net.URLClassLoader.defineClass (URLClassLoader.java:550)
    at java.net.URLClassLoader$1.run (URLClassLoader.java:458)
    at java.net.URLClassLoader$1.run (URLClassLoader.java:452)
    at java.security.AccessController.doPrivileged (Native Method)
    at java.net.URLClassLoader.findClass (URLClassLoader.java:451)
    at java.lang.ClassLoader.loadClass (ClassLoader.java:588)
    at java.lang.ClassLoader.loadClass (ClassLoader.java:521)
    at java.lang.Class.getDeclaredFields0 (Native Method)
    at java.lang.Class.privateGetDeclaredFields (Class.java:3062)
    at java.lang.Class.getDeclaredFields (Class.java:2249)
    at org.springframework.util.ReflectionUtils.getDeclaredFields (ReflectionUtils.java:715)
    at org.springframework.util.ReflectionUtils.doWithLocalFields (ReflectionUtils.java:656)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.buildResourceMetadata (CommonAnnotationBeanPostProcessor.java:361)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.findResourceMetadata (CommonAnnotationBeanPostProcessor.java:340)
    at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.postProcessMergedBeanDefinition (CommonAnnotationBeanPostProcessor.java:297)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyMergedBeanDefinitionPostProcessors (AbstractAutowireCapableBeanFactory.java:992)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean (AbstractAutowireCapableBeanFactory.java:523)
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean (AbstractAutowireCapableBeanFactory.java:483)
    at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject (AbstractBeanFactory.java:306)
    at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton (DefaultSingletonBeanRegistry.java:230)
    at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean (AbstractBeanFactory.java:302)
    at org.springframework.beans.factory.support.AbstractBeanFactory.getBean (AbstractBeanFactory.java:197)
    at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons (DefaultListableBeanFactory.java:761)
    at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization (AbstractApplicationContext.java:866)
    at org.springframework.context.support.AbstractApplicationContext.refresh (AbstractApplicationContext.java:542)
    at org.springframework.boot.context.embedded.EmbeddedWebApplicationContext.refresh (EmbeddedWebApplicationContext.java:122)
    at org.springframework.boot.SpringApplication.refresh (SpringApplication.java:737)
    at org.springframework.boot.SpringApplication.refreshContext (SpringApplication.java:370)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:314)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1162)
    at org.springframework.boot.SpringApplication.run (SpringApplication.java:1151)
    at com.example.fabrikam.TodoDemo.TodoDemoApplication.main (TodoDemoApplication.java:25)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)
    at jdk.internal.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)
    at jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke (Method.java:566)
    at org.springframework.boot.maven.AbstractRunMojo$LaunchRunner.run (AbstractRunMojo.java:527)
    at java.lang.Thread.run (Thread.java:834)
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  9.637 s
[INFO] Finished at: 2019-05-15T20:11:33+08:00
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.springframework.boot:spring-boot-maven-plugin:1.5.3.RELEASE:run (default-cli) on project TodoDemo: An exception occurred while running. null: InvocationTargetException: Error creating bean with name 'scheduleController' defined in file [C:\Users\wrk\workspace\todo\target\classes\com\example\fabrikam\TodoDemo\ScheduleController.class]: Post-processing of merged bean definition failed; nested exception is java.lang.IllegalStateException: Failed to introspect bean class [com.example.fabrikam.TodoDemo.ScheduleController] for resource metadata: could not find class that it depends on: org/springframework/data/repository/CrudRepository: org.springframework.data.repository.CrudRepository -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
```


数据库配置错误。原因是在`pom.xml`中的resources标签配置的不是resources目录，而是templates


## fetch 格式

```js
fetch(url, {
            method : "post",
            headers : {
                "Content-Type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify(item)
        })
```

## fetch canceled

form标签会触发一次新的跳转使原来的后端访问失效