package com.TeamSVTTR17.Website_Apartment.Service;

import com.TeamSVTTR17.Website_Apartment.Entity.Img;
import com.TeamSVTTR17.Website_Apartment.Entity.Post;
import com.TeamSVTTR17.Website_Apartment.Entity.User;
import com.TeamSVTTR17.Website_Apartment.Repository.PostRepo;
import com.TeamSVTTR17.Website_Apartment.Repository.UserRepo;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class Feature {
    @Autowired
    private PostRepo postRepo;

    @Autowired
    private UserRepo userRepo;
    public void CrawlData(){
        List<Post> listPost = new ArrayList<>();
        User user = userRepo.findById(3).get();
        System.setProperty("webdriver.chrome.driver", "src/main/resources/Driver/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
//		options.addArguments("--headless");
        WebDriver driver = new ChromeDriver(options);

        try {
            driver.get("https://mogi.vn/thue-phong-tro-nha-tro");
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            List<WebElement> pages = driver.findElements(By.cssSelector("#property > div.property-listing > div.paging > ul > li > a"));
            List<String> links = new ArrayList<>();
            for (WebElement page : pages) {
                links.add(page.getAttribute("href"));
            }
            int i = 0;
            for (String link: links
            ) {
                if (i== 2){
                    break;
                }

                System.out.println("==========================================Page New =========================");


                List<WebElement> liElements = driver.findElements(By.cssSelector("#property > div.property-listing > ul > li"));
                for (WebElement element: liElements
                ) {
                    Post post = new Post();

                    Thread.sleep(1000);
                    element.click();

                    String title = driver.findElement(By.xpath("//*[@id='mogi-page-content']/div[2]/div[1]/div[2]/div[1]/h1")).getText();
                    System.out.println("title: " + title);

//				String size = driver.findElement(By.xpath("")).getText();
                    String area = driver.findElement(By.xpath("//*[@id='mogi-page-content']/div[2]/div[1]/div[2]/div[5]/div[1]/span[2]")).getText();
                    System.out.println("Area: " + area);

                    String des = driver.findElement(By.xpath("//*[@id='mogi-page-content']/div[2]/div[1]/div[2]/div[6]")).getText();
                    System.out.println("Description: " + des);


                    List<WebElement> imgs = driver.findElements(By.className("lozad"));
                    List<Img> imgSrc = new ArrayList<>();
                    for (WebElement imgEle : imgs) {
                        String src = imgEle.getAttribute("data-src");
                        Img img = new Img();
                        img.setUrl_img(src);
                        img.setPost(post);
                        imgSrc.add(img);

                    }
                    imgSrc.forEach(img -> System.out.println("img : " + img.getUrl_img()));


                    String address = driver.findElement(By.xpath("//*[@id='mogi-page-content']/div[2]/div[1]/div[2]/div[2]")).getText();
                    System.out.println("Address: " + address);

                    String price = driver.findElement(By.xpath("//div[@id='mogi-page-content']/div[2]/div[1]/div[2]/div[3]")).getText();
                    Date updateTime = new Date(System.currentTimeMillis());
                    System.out.println("price : " + price);
                    String createTime = driver.findElement(By.xpath("//*[@id='mogi-page-content']/div[2]/div[1]/div[2]/div[5]/div[3]/span[2]")).getText();
                    System.out.println("create Time :" + createTime);



                    post.setUser(user);
                    post.setTitle(title);
                    post.setAddress(address);
                    post.setDescription(des);
                    post.setArea(area);
                    post.setPrice(price);
                    post.setSize(40);
                    post.setImgs(imgSrc);
                    post.setUpdateTime(updateTime);
                    post.setCreateTime(updateTime);

                    listPost.add(post);



                    System.out.println("------------------------------");


                    driver.navigate().back();

                }
                System.out.println("Next to Page" + link);
                Thread.sleep(3000);
                driver.navigate().to(links.get(i));
                i+= 1;
                Thread.sleep(2000);
            }


        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        driver.close();

        postRepo.saveAll(listPost);

    }

}
