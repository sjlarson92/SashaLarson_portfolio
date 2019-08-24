# C#

# How to Change the Hosting Environment for Mac

```bash
export ASPNETCORE_ENVIRONMENT="Development"
# This will change the Hosting Environment to "Development"
```

## How to Downgrade Dotnet

First go into .csproj file and edit the version for to the old versions you want. Use the Microsoft.Net website to find older versions and test which ones are compatible with your PC. Make sure to use dotnet restore to update packages.

Afterwards go to startup.cs file and remove ILoggerFactory method as this is not compatible. Make sure to remove all instances and dependencies.

Remove/comment out this code:

```c#
loggerFactory.AddConsole(Configuration.GetSection("Logging"));
loggerFactory.AddDebug();
```

Packet Versions that work with my PC (used for project TechJobs):

```c#
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>netcoreapp1.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.8" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore" Version="1.1.7" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.Extensions.Configuration.EnvironmentVariables"
    Version="1.1.2" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.StaticFiles"
    Version="1.1.2" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.VisualStudio.Web.BrowserLink"
    Version="1.1.3" />
  </ItemGroup>


  <ItemGroup>
    <DotNetCliToolReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Tools" Version="2.0.0" />
  </ItemGroup>

</Project>
```
