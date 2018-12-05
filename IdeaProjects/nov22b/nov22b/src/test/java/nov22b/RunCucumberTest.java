package nov22b;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features", tags = { "@AAPL" }, plugin = { "pretty", "html:target" })
public class RunCucumberTest {
}