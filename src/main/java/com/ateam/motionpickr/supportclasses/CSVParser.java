package com.ateam.motionpickr.supportclasses;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

@Component
public class CSVParser implements CommandLineRunner {
    public static void parse() {
        String csvFilePath = "C:\\Users\\alex-\\IdeaProjects\\motionpickr\\datasets\\data.csv"; // Replace with your CSV file path

        try (Reader reader = new FileReader(csvFilePath);
             org.apache.commons.csv.CSVParser csvParser = new org.apache.commons.csv.CSVParser(reader, CSVFormat.EXCEL.withFirstRecordAsHeader())) {

            for (CSVRecord csvRecord : csvParser) {
                String budget = csvRecord.get("budget");
                String genres = csvRecord.get("genres");
                String homepage = csvRecord.get("homepage");
                String id = csvRecord.get("id");
                String keywords = csvRecord.get("keywords");
                String originalLanguage = csvRecord.get("original_language");
                String originalTitle = csvRecord.get("original_title");
                String overview = csvRecord.get("overview");
                String popularity = csvRecord.get("popularity");
                String productionCompanies = csvRecord.get("production_companies");
                String productionCountries = csvRecord.get("production_countries");
                String releaseDate = csvRecord.get("release_date");
                String revenue = csvRecord.get("revenue");
                String runtime = csvRecord.get("runtime");
                String spokenLanguages = csvRecord.get("spoken_languages");
                String status = csvRecord.get("status");
                String tagline = csvRecord.get("tagline");
                String title = csvRecord.get("title");
                String voteAverage = csvRecord.get("vote_average");
                String voteCount = csvRecord.get("vote_count");

                System.out.println("Title: " + title + " Genres: " + ArrayExtractor.extract(genres, "name"));
                System.out.println("Original title : " + originalTitle);
                System.out.println("tagline: " + tagline);
                System.out.println("keywords : " + ArrayExtractor.extract(keywords, "name"));
                System.out.println("overview: " + overview);
                System.out.println();

            }

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    @Override
    public void run(String... args) throws Exception {
        parse();
    }
}