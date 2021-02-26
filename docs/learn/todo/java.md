# Maven之阿里云镜像仓库配置
添加阿里云的镜像到maven的setting.xml配置中
添加镜像仓库的配置，在mirrors节点下面添加子节点：
```xml
<id>nexus-aliyun</id>
<mirrorOf>central</mirrorOf>
<name>Nexus aliyun</name>
<url>http://maven.aliyun.com/nexus/content/groups/public class="hljs-tag"></url>
```


`<property name="dynamic.classpath" value="true" />`