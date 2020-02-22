# testing

## IntelliJ

- `Cmd + Shift + t` This finds the file/test file associated with the one you are currently in
- change IntelliJ settings to allow Gradle to show test names: 
   - Preferences > Build, Execution, Deployment > Build Tools > Gradle > Run tests using `IntelliJ IDEA`
   - Make sure you select the correct application that you want this to apply to
 
## Jest

<!-- set up
enzyme -->

## Yarn Commands

`yarn test`

Test specific file:
`yarn test -- fileName`

## JUnit

 - `gradle test` Runs test through terminal
 - Can also run with intelliJ
 
 - Add to build.gradle in order to add logging for tests:

```groovy
test {
	useJUnitPlatform()
	testLogging {
		events = ["passed", "skipped", "failed"]
		exceptionFormat = "full"
	}
}
```

- AssertJ library import is: 

`import static org.assertj.core.api.Assertions.assertThat;`

- Change test name by using annotation `@DisplayName()`