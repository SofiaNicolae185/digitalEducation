package com.application.digitalEducation.service;


import com.application.digitalEducation.configuration.EmailConfiguration;
import com.application.digitalEducation.dto.MailResponse;
import com.application.digitalEducation.dto.QuestionFormCardStudent;
import com.application.digitalEducation.dto.RegisterRequest;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class EmailService {

    @Autowired
    EmailConfiguration emailConfiguration;

    @Autowired
    private Configuration config;

    @Autowired
    private JavaMailSender sender;

    public MailResponse sendConfirmationEmail(RegisterRequest request, Map<String, Object> model) {
        MailResponse response = new MailResponse();
        MimeMessage message = sender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            model.put("token", UUID.randomUUID().toString());

            Template t = config.getTemplate("confirm-email-template.ftl");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

            helper.setTo(request.getTo());
            helper.setText(html, true);
            helper.setSubject(request.getSubject());
            helper.setFrom(new InternetAddress("0b5d29e626-65f490@inbox.mailtrap.io", false));
            sender.send(message);

            response.setMessage("mail send to : " + request.getTo());
            response.setStatus(Boolean.TRUE);

        } catch (MessagingException | IOException | TemplateException e) {
            response.setMessage("Mail Sending failure : " + e.getMessage());
            response.setStatus(Boolean.FALSE);
        }

        return response;
    }

    public MailResponse sendEmailToStudent(QuestionFormCardStudent request, String templateName) {
        MailResponse response = new MailResponse();
        MimeMessage message = sender.createMimeMessage();
        try {
            Map<String, Object> model = new HashMap<>();
            model.put("firstName", request.getFirstName());
            model.put("lastName", request.getLastName());
            model.put("email", request.getStudentEmail());

            MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            Template t = config.getTemplate(templateName);
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

            System.out.println("email: " + request.getStudentEmail());
            helper.setTo(request.getStudentEmail());
            helper.setText(html, true);
            helper.setSubject(request.getSubject());
            helper.setFrom(new InternetAddress("0b5d29e626-65f490@inbox.mailtrap.io", false));
            sender.send(message);

            response.setMessage("mail send to : " + request.getStudentEmail());
            response.setStatus(Boolean.TRUE);

        } catch (MessagingException | IOException | TemplateException e) {
            response.setMessage("Mail Sending failure : " + e.getMessage());
            response.setStatus(Boolean.FALSE);
        }

        return response;
    }

    public MailResponse sendEmailToTrainer(QuestionFormCardStudent request,String templateName) {
        MailResponse response = new MailResponse();
        MimeMessage message = sender.createMimeMessage();
        try {
            Map<String, Object> model = new HashMap<>();
            model.put("firstName", request.getFirstName());
            model.put("lastName", request.getLastName());
            model.put("email", request.getStudentEmail());

            MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            Template t = config.getTemplate(templateName);
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

            helper.setTo("digitalEducation@gmail.com");
            helper.setSubject("There is a new question from a student!");
            helper.setText(html, true);
            helper.setFrom(new InternetAddress("0b5d29e626-65f490@inbox.mailtrap.io", false));
            sender.send(message);

            response.setMessage("mail send to : digitalEducation@gmail.com");
            response.setStatus(Boolean.TRUE);

        } catch (MessagingException | IOException e) {
            response.setMessage("Mail Sending failure : " + e.getMessage());
            response.setStatus(Boolean.FALSE);
        } catch (TemplateException e) {
            throw new RuntimeException(e);
        }

        return response;
    }


}
